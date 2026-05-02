require "fileutils";

FileUtils.rm_rf("node_modules");
unless system("pnpm", "purge");
  exit($?.exitstatus || 1);
end;
