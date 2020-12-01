const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
