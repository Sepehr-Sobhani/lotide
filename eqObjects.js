const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arrayOne, arrayTwo) => {
  let output = true;
  if (arrayOne.length !== arrayTwo.length) output = false;
  else {
    for (let i = 0; i < arrayOne.length; i++) {
      arrayOne[i] !== arrayTwo[i] ? (output = false) : "";
    }
  }
  return output;
};

const eqObjects = (object1, object2) => {
  let result = true;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      if (object2[key]) {
        if (Array.isArray(object1[key])) {
          if (!eqArrays(object1[key], object2[key])) result = false;
        } else {
          if (object1[key] !== object2[key]) result = false;
        }
      } else result = false;
    }
  } else result = false;
  return result;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
