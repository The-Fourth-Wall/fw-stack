declare interface ImportMetaEnv {
  readonly PUBLIC_ENV?: "dev" | "stage" | "preprod" | "prod";
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
