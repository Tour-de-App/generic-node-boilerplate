import { createUsersTable } from "./db.js";
import server from "./server.js";

const PORT = 3000;

createUsersTable();

server.listen(PORT, () => {
  console.log(`HTTP Server running on port ${PORT}`);
});
