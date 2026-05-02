import {Content} from "@content";
import {env} from "@models";
import type {APIContext} from "astro";
import {
  MAINT_COOKIE_TTL_SEC,
  maint_issue_token,
  maint_token_valid,
} from "./bypass-token";

const maintenance_page_html = Content.Email.read_email({
  file_path: "maintenance-page.html",
});

type Props = {
  context: APIContext;
};

export function gate_response({context}: Props) {
  if (env.MAINTENANCE !== "true") {
    return undefined;
  }
  const {url, request, redirect, cookies} = context;
  const raw = url.pathname;
  const p = raw.length > 1 && raw.endsWith("/") ? raw.slice(0, -1) : raw;
  const exempt =
    p === "/health" ||
    p === "/logo.svg" ||
    p === "/logo.png" ||
    p === "/logo-wide-left.png" ||
    (request.method === "POST" && p === "/webhook");
  if (exempt) {
    return undefined;
  }
  const secret = env.MAINTENANCE_BYPASS_SECRET;
  const secure =
    url.protocol === "https:" ||
    request.headers.get("x-forwarded-proto") === "https";
  if (secret && url.searchParams.get("maintenance_bypass") === secret) {
    cookies.set("maint_ok", maint_issue_token(secret), {
      path: "/",
      httpOnly: true,
      secure,
      sameSite: "lax",
      maxAge: MAINT_COOKIE_TTL_SEC,
    });
    const clean = new URL(url.href);
    clean.searchParams.delete("maintenance_bypass");
    return redirect(`${clean.pathname}${clean.search}${clean.hash}`, 302);
  }
  if (!maint_token_valid(cookies.get("maint_ok")?.value, secret)) {
    return new Response(maintenance_page_html, {
      status: 503,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Retry-After": "3600",
        "Cache-Control": "no-store",
      },
    });
  }
  return undefined;
}
