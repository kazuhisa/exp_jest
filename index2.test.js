// spyによるモックの実装
const index = require("./index");
afterEach(() => {
  jest.restoreAllMocks();
});

describe("work", () => {
  jest.spyOn(index, "getUserQuery").mockImplementation(() => "hogehoge");
  it("getUserQueryをモックしてhogehogeを返す", async () => {
    const result = await index.work("testuser");
    expect(result).toBe("hogehoge");
  });
});
