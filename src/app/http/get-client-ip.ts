/**
 * Returns the best-guess client IP for rate-limiting purposes.
 * Uses the last X-Forwarded-For hop (edge-appended, trusted) rather than the
 * first (client-supplied, spoofable). Falls back to X-Real-IP, then "unknown"
 * for environments without an upstream proxy (local dev).
 */
export function get_client_ip(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const parts = forwarded
      .split(",")
      .map(p => p.trim())
      .filter(Boolean);
    if (parts.length > 0) {
      return parts[parts.length - 1];
    }
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}
