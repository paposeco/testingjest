const arrayToObject = require("./analyse");

test("new object from example array", () => {
  expect(arrayToObject([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("new object with non numbers", () => {
  expect(arrayToObject([1, "a", 3, 4, 2, 6])).toMatch("Error");
});

test("new object array of zeros", () => {
  expect(arrayToObject([0, 0, 0])).toMatchObject({
    average: 0,
    min: 0,
    max: 0,
    length: 3,
  });
});

test("new object array with negative numbers", () => {
  expect(arrayToObject([-1, 2, -4])).toMatchObject({
    average: -1,
    min: -4,
    max: 2,
    length: 3,
  });
});
