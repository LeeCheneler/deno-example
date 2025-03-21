Deno.serve(() => {
  return new Response("Hello World from the Deno knowledge share!", {
    headers: { "content-type": "text/plain" },
  });
});
