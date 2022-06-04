import { serve } from "https://deno.land/std@0.142.0/http/server.ts";
import { getCookies } from "https://deno.land/std/http/mod.ts";

const port = parseInt(Deno.env.get("PORT") ?? "8000");

const handler = (request: Request): Response => {
  return new Response(JSON.stringify(getCookies(request.headers)), { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
