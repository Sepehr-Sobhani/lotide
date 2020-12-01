const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it("returns [1] for letter e of 'Hello'", () => {
    assert.deepEqual(letterPositions("Hello").e, [1]);
  });
});
