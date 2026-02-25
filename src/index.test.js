const { greet, getVersion } = require("./index");

describe("Grok Patch Module", () => {
  test("getVersion() should return package version", () => {
    expect(getVersion()).toBe("1.0.0");
  });

  test("greet() should log the hello message (mocked)", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    greet();
    expect(consoleSpy).toHaveBeenCalledWith("Hello World");
    consoleSpy.mockRestore();
  });
});