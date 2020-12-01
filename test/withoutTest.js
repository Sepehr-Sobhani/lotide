const without = require("../without");
const assert = require("chai").assert;

describe("#without", () => {
  it(`returns [2, 3] for [1, 2, 3] as the first parameter and [1] as the second parameter`, () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it(`returns ["1", "2"] for ["1", "2", "3"] as the first parameter and [1, 2, "3"] as the second parameter`, () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});
