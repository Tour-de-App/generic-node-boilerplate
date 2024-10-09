import Database from "better-sqlite3";

const db = new Database("tda.db", { verbose: console.log });

export function createUsersTable() {
  const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )
    `;
  // Add default users
  const defaultUsers = [{ name: "John Doe" }, { name: "Jane Smith" }, { name: "Alice Johnson" }];

  const insertUserQuery = `INSERT INTO users (name) VALUES (?)`;
  const insertStatement = db.prepare(insertUserQuery);

  defaultUsers.forEach((user) => {
    insertStatement.run(user.name);
  });
  db.exec(createTableQuery);
}

export function getAllUsers() {
  const query = "SELECT id, name FROM users";
  const statement = db.prepare(query);
  const users = statement.all();
  return users.map((user) => ({ id: user.id, name: user.name }));
}
