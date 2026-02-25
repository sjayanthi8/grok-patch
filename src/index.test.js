const { greet, getVersion } = require("./index");

describe("Grok Patch Module", () => {
  test("getVersion() should return package version", () => {
    expect(getVersion()).toBe("2.0.0"); // deliberate failure for demo
  });

  test("greet() should log the hello message (mocked)", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    greet();
    expect(consoleSpy).toHaveBeenCalledWith("Hello World");
    consoleSpy.mockRestore();
  });
});