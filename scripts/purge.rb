require "fileutils";

["node_modules/.astro", ".astro", "dist"].each do |path|
  FileUtils.rm_rf(path);
end;
unless system("pnpm", "exec", "astro", "preferences", "disable", "devToolbar");
  exit($?.exitstatus || 1);
end;
