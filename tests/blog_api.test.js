const mongoose = require("mongoose");
const Blog = require("../models/blog");
const connectDb = require("../utils/dB");
const request = require("supertest");
jest.setTimeout(10000);

const intialBlog = [
  {
    content: "blog about css",
    title: "hello css",
    author: "ali",
    userId: "6316afb3e99645f8e057ec20",
  },
  {
    content: "blog about html",
    title: "hello html",
    author: "ala",
    userId: "6316afb3e99645f8e057ec20",
  },
  {
    content: "blog about js",
    title: "hello js",
    author: "alen",
    userId: "6316afb3e99645f8e057ec20",
  },
];
describe("Testing Blog Routes", () => {
  test("Test Type of Retour and status codes in /user", async () => {
    request("https://intense-badlands-34336.herokuapp.com/api/v1")
      .get("/blog")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  }),
    test("Test Number of Blog", async () => {
      const response = await request(
        "https://intense-badlands-34336.herokuapp.com/api/v1"
      ).get("/blog");
      expect(response.body.blogs).toHaveLength(intialBlog.length);
    }),
    beforeEach(async () => {
      await connectDb();
      await Blog.deleteMany({});
      await Blog.create(intialBlog);
    });
  afterAll(() => {
    mongoose.connection.close();
  });
});
