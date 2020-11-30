const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// const eqArrays = (arrayOne, arrayTwo) => {
//   let output = true;
//   for (let i = 0; i < arrayOne.length; i++) {
//     arrayOne[i] !== arrayTwo[i] ? (output = false) : "";
//   }
//   return output;
// };

const eqArrays = (arrayOne, arrayTwo) => {
  let result = true;
  if (Array.isArray(arrayOne) && Array.isArray(arrayTwo)) {
    if (arrayOne.length === arrayTwo.length) {
      for (let i = 0; i < arrayOne.length; i++) {
        if (Array.isArray(arrayOne[i])) {
          result = eqArrays(arrayOne[i], arrayTwo[i]);
        } else {
          if (arrayOne[i] !== arrayTwo[i]) return (result = false);
        }
      }
    } else result = false;
  } else result = false;
  return result;
};

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

console.log(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  )
); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false

assertEqual(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  ),
  false
);
