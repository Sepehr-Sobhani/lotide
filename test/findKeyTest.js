const findKey = require("../findKey");
const assert = require("chai").assert;

const firstParam = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

describe("#findKey", () => {
  it(`returns 'noma' for firstParam as the first parameter and '(x) => x.stars === 2
  )'as the second parameter`, () => {
    assert.deepEqual(
      findKey(firstParam, (x) => x.stars === 2),
      "noma"
    );
  });
  it(`returns 'Akaleri' for firstParam as the first parameter and '(x) => x.stars === 3
  )'as the second parameter`, () => {
    assert.deepEqual(
      findKey(firstParam, (x) => x.stars === 3),
      "Akaleri"
    );
  });
  it(`returns 'Blue Hill' for firstParam as the first parameter and '(x) => x.stars === 1
  )'as the second parameter`, () => {
    assert.deepEqual(
      findKey(firstParam, (x) => x.stars === 1),
      "Blue Hill"
    );
  });
});
