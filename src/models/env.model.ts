export const env = {
  PUBLIC_ENV: import.meta.env.PUBLIC_ENV || "dev",
  MAINTENANCE:
    (typeof process !== "undefined" && process.env?.MAINTENANCE) ||
    import.meta.env.MAINTENANCE ||
    "false",
  MAINTENANCE_BYPASS_SECRET:
    (typeof process !== "undefined" &&
      process.env?.MAINTENANCE_BYPASS_SECRET) ||
    import.meta.env.MAINTENANCE_BYPASS_SECRET ||
    "",
};
