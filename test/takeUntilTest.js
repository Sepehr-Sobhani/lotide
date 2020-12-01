const takeUntil = require("../takeUntil");
const assert = require("chai").assert;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");

describe("#takeUntil", () => {
  it(`returns [1, 2, 5, 7, 2] for data1 as the first parameter and (x) => x < 0 as the second parameter`, () => {
    assert.deepEqual(
      takeUntil(data1, (x) => x < 0),
      [1, 2, 5, 7, 2]
    );
  });
  it(`returns ["I've", "been", "to", "Hollywood"] for data2 as the first parameter and (x) => x === "," as the second parameter`, () => {
    assert.deepEqual(
      takeUntil(data2, (x) => x === ","),
      ["I've", "been", "to", "Hollywood"]
    );
  });
});
