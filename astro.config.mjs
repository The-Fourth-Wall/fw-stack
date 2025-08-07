import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import {defineConfig} from "astro/config";

export default defineConfig({
  adapter: vercel({
    analytics: true,
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [react()],
  output: "server",
  prefetch: {
    prefetchAll: false,
  },
  site: "https://localhost:4321",
  srcDir: "./src/client",
});
