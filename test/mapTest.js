const map = require("../map");
const assert = require("chai").assert;

const array1 = [1, 4, 9, 16];
let numbers = [1, 4, 9];
const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it(`returns [2, 8, 18, 32] for [1, 4, 9, 16] as the first parameter and (x) => x * 2 as the second parameter`, () => {
    assert.deepEqual(
      map(array1, (x) => x * 2),
      [2, 8, 18, 32]
    );
  });
  it(`returns ["g", "c", "t", "m", "t"] for ["ground", "control", "to", "major", "tom"] as the first parameter and (word) => word[0] as the second parameter`, () => {
    assert.deepEqual(
      map(words, (word) => word[0]),
      ["g", "c", "t", "m", "t"]
    );
  });
  it(`returns [1, 2, 3] for [1, 4, 9] as the first parameter and (number) => Math.sqrt(number) as the second parameter`, () => {
    assert.deepEqual(
      map(numbers, (number) => Math.sqrt(number)),
      [1, 2, 3]
    );
  });
});
