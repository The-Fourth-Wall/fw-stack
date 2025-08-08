declare interface ImportMetaEnv {
  readonly ENV?: "dev" | "stage" | "preprod" | "prod" | "beta";
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
