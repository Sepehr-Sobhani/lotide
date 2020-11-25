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

const checkEvenLength = (array) => {
  return array.length % 2 === 0 ? true : false;
};

const showMiddle = (array) => {
  if (array.length < 3) return [];
  else {
    if (checkEvenLength(array))
      return array.slice(array.length / 2 - 1, array.length / 2 + 1);
    else return array[Math.floor(array.length / 2)];
  }
};

assertArraysEqual(showMiddle([1]), []);
assertArraysEqual(showMiddle([1, 2]), []);
assertArraysEqual(showMiddle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(showMiddle([1, 2, 3]), [2]);
assertArraysEqual(showMiddle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(showMiddle([1, 2, 3, 4, 5, 6]), [3, 4]);
