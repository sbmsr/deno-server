import { getCookies } from "https://deno.land/std/http/mod.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "https://jobsimulator-dev.vercel.app");
  ctx.response.headers.set("Access-Control-Allow-Credentials", "true");
  return next();
});

app.use(({ request, response }) => {
  response.body = JSON.stringify(getCookies(request.headers));
});

const port = parseInt(Deno.env.get("PORT") ?? "8000");
await app.listen({ port: port });
