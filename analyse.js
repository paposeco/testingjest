//Array Analysis. Write a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

let makeObject = class {
  constructor(average, min, max, length) {
    this.average = average;
    this.min = min;
    this.max = max;
    this.length = length;
  }
};

const arrayToObject = function (array) {
  const initialarray = array;
  if (
    initialarray.filter((element) => typeof element !== "number").length !== 0
  ) {
    return "Error";
  }
  const average = calculateAverage(array);
  const min = calculateMin(array);
  const max = calculateMax(array);
  const length = array.length;
  const obj = new makeObject(average, min, max, length);
  return obj;
};

const calculateAverage = function (array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum = array.reduce(reducer);
  return sum / array.length;
};

const calculateMin = function (array) {
  const reducer = function (accumulator, currentValue) {
    if (accumulator >= currentValue) {
      accumulator = currentValue;
    }
    return accumulator;
  };
  const min = array.reduce(reducer);
  return min;
};

const calculateMax = function (array) {
  const reducer = function (accumulator, currentValue) {
    if (accumulator <= currentValue) {
      accumulator = currentValue;
    }
    return accumulator;
  };
  const max = array.reduce(reducer);
  return max;
};

module.exports = arrayToObject;
