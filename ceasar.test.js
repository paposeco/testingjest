const encrypt = require("./ceasar");

test("encrypt shift 5", () => {
  expect(encrypt(5, "defend the east wall of the castle")).toMatch(
    "ijkjsi ymj jfxy bfqq tk ymj hfxyqj"
  );
});

test("encrypt shift 23", () => {
  expect(encrypt(23, "defend the east wall of the castle")).toMatch(
    "abcbka qeb bxpq txii lc qeb zxpqib"
  );
});

test("encrypt shift 23 with characters other than letters", () => {
  expect(encrypt(23, "defend the east! wall of the 25 castle")).toMatch(
    "abcbka qeb bxpq! txii lc qeb 25 zxpqib"
  );
});
