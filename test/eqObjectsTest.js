const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  it(`returns true for comparing { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }`, () => {
    assert.isTrue(
      eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
      true
    );
  });
  it(`returns true for comparing { a: { y: { x: 2, c: 3 }, z: 1 }, b: 2 } and { a: { z: 1, y: { c: 3, x: 2 } }, b: 2 }`, () => {
    assert.isTrue(
      eqObjects(
        { a: { y: { x: 2, c: 3 }, z: 1 }, b: 2 },
        { a: { z: 1, y: { c: 3, x: 2 } }, b: 2 }
      ),
      true
    );
  });
  it(`returns false for comparing { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }`, () => {
    assert.isFalse(
      eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
      false
    );
  });
  it(`returns false for comparing { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }`, () => {
    assert.isFalse(
      eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),
      false
    );
  });
});
