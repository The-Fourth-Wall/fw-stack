# unless system("pnpm", "convex:types")
#   exit($?.exitstatus || 1);
# end;
unless system("pnpm", "prettier");
  exit($?.exitstatus || 1);
end;
unless system("pnpm", "eslint");
  exit($?.exitstatus || 1);
end;
unless system("pnpm", "check");
  exit($?.exitstatus || 1);
end;
# unless system("pnpm", "convex:check")
#   exit($?.exitstatus || 1);
# end;
