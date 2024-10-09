import { describe, it, before, after } from "node:test";
import assert from "node:assert";
import http from "node:http";

describe("Hello endpoint test", () => {
  let server;
  before(async () => {
    // Import the server module dynamically
    const { default: app } = await import("../src/server.js");
    server = app.listen(3000);
  });

  after(() => {
    server.close();
  });

  it('should return "Hello Tour de App" from the / endpoint', async () => {
    const response = await new Promise((resolve, reject) => {
      http
        .get("http://localhost:3000", (res) => {
          let data = "";

          res.on("data", (chunk) => {
            data += chunk;
          });

          res.on("end", () => {
            resolve({ statusCode: res.statusCode, data });
          });
        })
        .on("error", reject);
    });

    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(response.data, "Hello Tour de App");
  });
});
