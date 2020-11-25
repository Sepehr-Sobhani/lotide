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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
