import { Application, ServerError } from "../../shared/types.ts";
import { test, describe, beforeEach } from "node:test";
import assert from "assert";
import supertest from "supertest";
import appService from "../services/applicationService.ts";
import helper from "./helper.ts";
import app from "../app.ts";

const api = supertest(app);

void describe("Applications API", () => {
  beforeEach(async () => {
    await appService._deleteAll();
    await appService._addMany(helper.mockApps);
  });

  void test("GET: all", async () => {
    const res = await api
      .get("/api/applications")
      .expect(200)
      .expect("Content-Type", /application\/json/);
    const data = Application.array().parse(res.body);
    assert(data.length === helper.mockApps.length);
  });

  void test("GET: by id (success)", async () => {
    const id = helper.mockApps[0].id;
    const res = await api
      .get(`/api/applications/${id}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    const data = Application.parse(res.body);
    assert.deepEqual(data, helper.mockApps[0]);
  });

  void test("GET: by id (fail)", async () => {
    const id = "1234";
    const res = await api
      .get(`/api/applications/${id}`)
      .expect(404)
      .expect("Content-Type", /application\/json/);
    const body = ServerError.parse(res.body);
    console.log(body); // TODO: consider if body should be asserted
  });
});
