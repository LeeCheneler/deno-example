Deno.serve(() => {
  return new Response("Hello World from Lee", {
    headers: { "content-type": "text/plain" },
  });
});
