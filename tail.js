const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = (array) => {
  return array.length <= 1 ? [] : array.slice(1);
};

assertEqual(tail([1]), []);
assertEqual(tail([]), []);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
