const reverseit = require("./reverseit");

test("reverse word", () => {
  expect(reverseit("cotton")).toMatch("nottoc");
});

test("reverse string", () => {
  expect(reverseit("cotton picking day")).toMatch("yad gnikcip nottoc");
});

test("reverse empty string", () => {
  expect(reverseit(" ")).toMatch(" ");
});
