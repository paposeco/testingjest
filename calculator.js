//A calculator object that contains the basic operations: add, subtract, divide, and multiply.

const calculator = (function (a, b) {
  const checkForNumber = function (a, b) {
    if (typeof a === "string" || typeof b === "string") {
      return false;
    } else {
      return true;
    }
  };
  const add = function (a, b) {
    if (checkForNumber(a, b)) {
      return Number(a + b);
    } else {
      return "Error";
    }
  };
  const subtract = function (a, b) {
    if (checkForNumber(a, b)) {
      return Number(a - b);
    } else {
      return "Error";
    }
  };
  const divide = function (a, b) {
    if (checkForNumber(a, b)) {
      if (b !== 0) {
        return Number(a / b);
      } else {
        return "Error";
      }
    } else {
      return "Error";
    }
  };
  const multiply = function (a, b) {
    if (checkForNumber(a, b)) {
      return Number(a * b);
    } else {
      return "Error";
    }
  };
  return { add, subtract, divide, multiply };
})();

module.exports = {
  add: calculator.add,
  subtract: calculator.subtract,
  divide: calculator.divide,
  multiply: calculator.multiply,
};
