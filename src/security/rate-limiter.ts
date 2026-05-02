import {RateLimiterMemory, type RateLimiterRes} from "rate-limiter-flexible";

const global_limiter = new RateLimiterMemory({
  keyPrefix: "global",
  points: 100,
  duration: 60,
});

type ConsumeOk = {
  ok: true;
  remaining: number;
};
type ConsumeErr = {
  ok: false;
  retry_after: number;
};

async function consume_key(
  limiter: RateLimiterMemory,
  key: string,
): Promise<ConsumeOk | ConsumeErr> {
  try {
    const res: RateLimiterRes = await limiter.consume(key);
    return {
      ok: true,
      remaining: res.remainingPoints,
    };
  } catch (rej) {
    const res = rej as RateLimiterRes;
    return {
      ok: false,
      retry_after: Math.ceil(res.msBeforeNext / 1000),
    };
  }
}

export async function consume_global(key: string) {
  return consume_key(global_limiter, key);
}
