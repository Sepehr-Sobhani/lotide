const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("returns true for [[2, 3], [4]] and [[2, 3], [4]] ", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("returns false for [[2, 3], [4]] and [[2,3],[4,5]] ", () => {
    assert.isFalse(
      eqArrays(
        [[2, 3], [4]],
        [
          [2, 3],
          [4, 5],
        ]
      ),
      false
    );
  });
  it("returns false for [[2, 3], [4]] and [[2,3],[4,5]] ", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});
