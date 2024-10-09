export function hello(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Tour de App");
}
