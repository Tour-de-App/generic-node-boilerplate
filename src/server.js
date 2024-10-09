import http from "http";
import { hello } from "./handlers/hello.js";
import { users } from "./handlers/users.js";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    hello(req, res);
  } else if ("/users") {
    users(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

export default server;
