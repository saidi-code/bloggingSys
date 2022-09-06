const mongoose = require("mongoose");
const Blog = require("../models/blog");
const supertest = require("supertest");
// const request = require("supertest");
jest.setTimeout(100000);
const app = require("../utils/startServer");
const api = supertest(app);
const intialBlog = [
  { content: "blog about css", title: "hello css", author: "ali" },
  { content: "blog about html", title: "hello html", author: "ala" },
  { content: "blog about js", title: "hello js", author: "alen" },
];
describe("Testing User Routes", () => {
  test("Test Type of Retour and status codes in /user", async () => {
    // request("http://127.0.0.1:3500")
    await api
      .get("api/v1/blog")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
  beforeEach(async () => {
    await Blog.deleteMany({});
    let noteObject = new Blog(intialBlog[0]);
    await noteObject.save();
    noteObject = new Blog(intialBlog[1]);
    await noteObject.save();
  });
  afterAll(() => {
    mongoose.connection.close();
  });
});
