const { greet, getVersion, newFeatureFlag, calculateSum } = require("./index");

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

  test("calculateSum() should add two numbers correctly", () => {
    expect(calculateSum(2, 3)).toBe(5);
    expect(calculateSum(-1, 1)).toBe(0);
  });
});
  test("newFeatureFlag() should return true in production", () => {
    expect(newFeatureFlag()).toBe(true);
  });
