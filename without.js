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

const without = (source, itemToRemove) => {
  let newArray = [];
  for (let number of source) {
    if (!itemToRemove.includes(number)) newArray.push(number);
  }
  return newArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
