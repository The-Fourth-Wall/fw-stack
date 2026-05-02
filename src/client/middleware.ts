import {Http, Maintenance} from "@app";
import {env} from "@models";
import {Security} from "@security";
import {defineMiddleware} from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const {request} = context;

  const maintenance_response = Maintenance.gate_response({context});
  if (maintenance_response) {
    return maintenance_response;
  }

  const ip = Http.get_client_ip(request);
  const limit = await Security.consume_global(ip);
  if (
    !limit.ok &&
    (env.PUBLIC_ENV === "prod" || env.PUBLIC_ENV === "preprod")
  ) {
    return new Response("Too Many Requests", {
      status: 429,
      headers: {"Retry-After": limit.retry_after.toString()},
    });
  }

  return next();
});
