d = [
  "src/content/astro/sections",
  "src/translation/locales",
  "src/database/convex/functions/_generated",
];

dirs = [
  ".agents",
  ".astro",
  ".claude",
  ".opencode",
  "public",
  "node_modules",
  "dist",
];

astro = [
  "privacy",
  "terms",
];

lang = [
  "YAML",
  "SVG",
  "Markdown",
  "JSON",
];

cloc = [
  "cloc",
  "--exclude-lang=#{lang.join(',')}",
  "--fullpath",
  "--not-match-d=#{d.join('|')}",
  "--not-match-f=(#{astro.join('|')})\\.astro",
  "--exclude-dir=#{dirs.join(",")}",
  ".",
];
unless system(*cloc);
  exit($?.exitstatus || 1);
end;
