const { version } = require("./index");

test("version is 0.0.0-development", () => {
  expect(version).toBe("0.0.0-development");
});
