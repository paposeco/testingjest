const { add, subtract, divide, multiply } = require("./calculator");

test("all operations", () => {
  expect(add(3, 4)).toBe(7);
  expect(subtract(3, 4)).toBe(-1);
  expect(divide(10, 2)).toBe(5);
  expect(multiply(2, 3)).toBe(6);
});

test("not number", () => {
  expect(subtract(3, "g")).toBe("Error");
});

test("divide by zero", () => {
  expect(divide(3, 0)).toBe("Error");
});

test("empty string", () => {
  expect(add(3, "")).toBe("Error");
});
