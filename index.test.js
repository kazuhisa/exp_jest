// index.test.js
jest.mock("./query", () => ({
  getUserQuery: jest.fn(),
}));

const {work} = require("./index");
const {getUserQuery} = require("./query");

describe("work", () => {
  it("getUserQueryをモックしてhogehogeを返す", async () => {
    getUserQuery.mockResolvedValue("hogehoge");
    const result = await work("testuser");
    expect(result).toBe("hogehoge");
  });
});
