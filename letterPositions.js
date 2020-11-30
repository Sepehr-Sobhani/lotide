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

const letterPositions = function (sentence) {
  const results = {};
  let indexCounter = 0;
  for (const char of sentence) {
    if (char !== " ") {
      if (results[char]) {
        results[char].push(indexCounter);
      } else {
        results[char] = [indexCounter];
      }
    }
    indexCounter++;
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;
