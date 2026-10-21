import { Application, NewApplication, ServerError } from "../../shared/types.ts";
import { test, describe, beforeEach } from "node:test";
import assert from "assert";
import supertest from "supertest";
import appService from "../services/applicationService.ts";
import helper from "./helper.ts";
import app from "../app.ts";

const api = supertest(app);
const BASE_URL = "/api/applications";

void describe("Applications API", () => {
  beforeEach(async () => {
    await appService._deleteAll();
    await appService._addMany(helper.mockApps);
  });

  void test("GET: all", async () => {
    const res = await api
      .get(BASE_URL)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    const data = Application.array().parse(res.body);
    assert(data.length === helper.mockApps.length);
  });

  void test("GET: by id (success)", async () => {
    const id = helper.mockApps[0].id;
    const res = await api
      .get(`${BASE_URL}/${id}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    const data = Application.parse(res.body);
    assert.deepEqual(data, helper.mockApps[0]);
  });

  void test("GET: by id (fail)", async () => {
    const id = "1234";
    const res = await api
      .get(`${BASE_URL}/${id}`)
      .expect(404)
      .expect("Content-Type", /application\/json/);
    const body = ServerError.parse(res.body);
    assert.notEqual(body.error, "");
  });

  void test("POST: valid object", async () => {
    const newApp: NewApplication = {
      company: "Rovio",
      position: "CFO",
      status: "applied",
    };
    const res = await api
      .post(BASE_URL)
      .send(newApp)
      .expect(201)
      .expect("Content-Type", /application\/json/);
    const body = Application.parse(res.body);
    assert.deepEqual(body, { ...newApp, id: body.id, dateAdded: body.dateAdded });
  });

  void test("POST: INvalid object", async () => {
    const newApp = {
      company: "Rovio",
      // position: "CFO",
      status: "applied",
    };
    const res = await api
      .post(BASE_URL)
      .send(newApp)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    const body = ServerError.parse(res.body);
    assert.notEqual(body.error, "");
  });

  /* Applications API */
});
