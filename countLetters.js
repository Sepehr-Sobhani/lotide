const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (sentc) => {
  //return the count of each letter in the sentence
  const counterObject = {};
  for (const char of sentc) {
    if (char !== " ") {
      if (counterObject[char]) counterObject[char] += 1;
      else counterObject[char] = 1;
    }
  }
  return counterObject;
};

console.log(countLetters("lighthouse in the house"));
