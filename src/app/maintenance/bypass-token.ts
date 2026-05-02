import {createHmac, timingSafeEqual} from "node:crypto";

export const MAINT_COOKIE_TTL_SEC = 86_400;

function maint_sign(secret: string, exp: string) {
  return createHmac("sha256", secret).update(exp).digest("hex");
}

export function maint_issue_token(secret: string) {
  const exp = String(Math.floor(Date.now() / 1000) + MAINT_COOKIE_TTL_SEC);
  return `${exp}.${maint_sign(secret, exp)}`;
}

export function maint_token_valid(raw: string | undefined, secret: string) {
  if (!raw || !secret) {
    return false;
  }
  const dot = raw.indexOf(".");
  if (dot <= 0) {
    return false;
  }
  const exp_s = raw.slice(0, dot);
  const sig = raw.slice(dot + 1);
  const exp = Number(exp_s);
  if (!Number.isFinite(exp) || exp * 1000 <= Date.now()) {
    return false;
  }
  const expected = maint_sign(secret, exp_s);
  if (sig.length !== expected.length) {
    return false;
  }
  return timingSafeEqual(
    Buffer.from(sig, "utf8"),
    Buffer.from(expected, "utf8"),
  );
}
