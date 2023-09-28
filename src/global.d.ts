declare module "bun" {
  interface Env {
    DATABASE_AUTH_TOKEN: string;
    DATABASE_URL: string;
  }
}
