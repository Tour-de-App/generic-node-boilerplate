import { getAllUsers } from "../db.js";

export function users(req, res) {
  if (req.method === "GET") {
    const users = getAllUsers();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
}
