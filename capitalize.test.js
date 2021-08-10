const capitalizeit = require("./capitalize");

test("capitalize string", () => {
  expect(capitalizeit("não sei O que é o almoço.")).toMatch(
    "Não sei O que é o almoço."
  );
});

test("check first character only", () => {
  const stringcapitalized = capitalizeit("não sei o que é o almoço.");
  expect(stringcapitalized[0]).toMatch(/[A-Z]/);
});

test("first character is a number", () => {
  expect(capitalizeit("3llll")).toMatch("Error");
});

test("first character is already uppercase", () => {
  expect(capitalizeit("Não sei O que é o almoço.")).toMatch(
    "Não sei O que é o almoço."
  );
});
