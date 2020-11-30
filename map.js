const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = (arrayOne, arrayTwo) => {
  let output = true;
  for (let i = 0; i < arrayOne.length; i++) {
    arrayOne[i] !== arrayTwo[i] ? (output = false) : "";
  }
  return output;
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  if (eqArrays(arrayOne, arrayTwo))
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  else console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
};

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const result1 = map(words, (word) => word[0]);

const array1 = [1, 4, 9, 16];
const map1 = map(array1, (x) => x * 2);

let numbers = [1, 4, 9];
const result2 = map(numbers, (number) => Math.sqrt(number));

assertArraysEqual(map1, [2, 8, 18, 32]);
assertArraysEqual(result1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(result2, [1, 2, 3]);

module.exports = map;
