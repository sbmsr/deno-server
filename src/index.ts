// import { getCookies } from "https://deno.land/std/http/mod.ts";
// import { Application } from "https://deno.land/x/oak/mod.ts";

// const app = new Application();

// app.use(({ request, response }) => {
//   response.body = JSON.stringify(getCookies(request.headers));
// });

// const port = parseInt(Deno.env.get("PORT") ?? "8000");
// await app.listen({ port: port });
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: 8000 });
