allowed = ["dev", "stage", "preprod", "prod"];
mode = ARGV[0];
unless mode && allowed.include?(mode)
  abort("usage: ruby scripts/convex-deploy.rb <#{allowed.join("|")}>");
end;
env_file = ".env.#{mode}";
unless system("pnpm", "exec", "convex", "deploy", "--env-file", env_file)
  exit($?.exitstatus || 1);
end;
