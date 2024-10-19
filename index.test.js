// index.test.js
jest.mock("./index", () => ({
  ...jest.requireActual("./index"),
  getUserQuery: jest.fn(),
}));

const {work, getUserQuery} = require("./index");

describe("work", () => {
  it("getUserQueryをモックしてhogehogeを返す", async () => {
    getUserQuery.mockResolvedValue("hogehoge");
    const result = await work("testuser");
    expect(result).toBe("hogehoge");
  });
});
