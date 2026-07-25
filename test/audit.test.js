const request = require("supertest");
const app = require("../src/app");

describe("Health API", () => {
  test("GET /health should return status UP", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.status).toBe("UP");
  });
});

describe("Audit API", () => {
  test("POST /api/v1/audit should audit a valid URL", async () => {
    const res = await request(app).post("/api/v1/audit").send({
      url: "https://github.com",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.audit.url).toBe("https://github.com");
  });

  test("POST /api/v1/audit should return validation error for invalid URL", async () => {
    const res = await request(app).post("/api/v1/audit").send({
      url: "invalid-url",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });
});
