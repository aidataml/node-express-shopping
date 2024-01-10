process.env.NODE_ENV = "test";
const request = require("supertest");
const app = require("../app");

let items = require("../fakeDb")
let item = { name: "teeshirt", price:50 }

beforeEach(async function() {
  items.push(item)
});

afterEach(async function() {
  items = []
});

// Test retrieval of item list.
describe("GET /items", async function() {
  test("Gets item list", async function() {
    const response = await request(app).get(`/items`);
    const { items } = response.body;
    expect(response.statusCode).toBe(200);
    expect(items).toHaveLength(1);
  });
});

// Test item deletion.
describe("DELETE /items/:name", async function() {
    test("Delete item", async function() {
      const response = await request(app)
        .delete(`/items/${item.name}`);
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ message: "Deleted" });
    });
  });