env_path = ".env.dev";
unless File.file?(env_path)
  abort("missing #{env_path}");
end;

wanted = ["CONVEX_SELF_HOSTED_URL", "CONVEX_SELF_HOSTED_ADMIN_KEY"];
parsed = {};
File.foreach(env_path) do |line|
  line = line.strip.sub(/\Aexport\s+/, "");
  next if line.empty? || line.start_with?("#");
  k, v = line.split("=", 2);
  next unless v;
  next unless wanted.include?(k);
  v = v.gsub(/\A["']|["']\z/, "");
  parsed[k] = v;
end;

child_env = ENV.to_h.merge(parsed);
unless system(child_env, "pnpm", "exec", "convex", "codegen")
  exit($?.exitstatus || 1);
end;
