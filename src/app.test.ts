import request from "supertest";
import { app } from "./app";

describe("GET /", () => {
    it("Should return Hello World!", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello World!");
    });
});