import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import {defineConfig} from "astro/config";
import {execSync} from "child_process";

const site_url = "http://localhost:4321";

const get_git_branch = () => {
  const vercel_branch = process.env.VERCEL_GIT_COMMIT_REF;
  if (vercel_branch) {
    return vercel_branch;
  }

  try {
    return execSync("git rev-parse --abbrev-ref HEAD", {
      encoding: "utf-8",
    }).trim();
  } catch {
    return "unknown";
  }
};

const get_adapter = () => {
  const env = process.env.PUBLIC_ENV;
  if (env === "dev" || env === "stage") {
    return vercel({
      analytics: true,
      webAnalytics: {
        enabled: true,
      },
    });
  } else {
    return node({
      mode: "standalone",
    });
  }
};

export default defineConfig({
  adapter: get_adapter(),
  integrations: [
    react(),
    sitemap({
      filter: page => page !== `${site_url}/debug/`,
    }),
  ],
  output: "server",
  prefetch: {
    prefetchAll: false,
  },
  server: {
    host: "::",
  },
  site: site_url,
  srcDir: "./src/client",
  vite: {
    define: {
      __GIT_BRANCH__: JSON.stringify(get_git_branch()),
    },
    ssr: {
      noExternal: ["gsap"],
    },
  },
});
