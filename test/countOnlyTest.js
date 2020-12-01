const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const itemsToCount = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
};

describe("#countOnly", () => {
  it(`returns 1 for 'Jason' as first parameter and  '{
        Jason: true,
        Karima: true,
        Fang: true,
        Agouhanna: false,
      }' as second parameter `, () => {
    const expectedOutput = countOnly(firstNames, itemsToCount);
    assert.deepEqual(expectedOutput["Jason"], 1);
  });
  it(`returns undefined for 'Karima' as first parameter and  '{
        Jason: true,
        Karima: true,
        Fang: true,
        Agouhanna: false,
      }' as second parameter `, () => {
    const expectedOutput = countOnly(firstNames, itemsToCount);
    assert.deepEqual(expectedOutput["Karima"], undefined);
  });
  it(`returns 2 for 'Fang' as first parameter and  '{
        Jason: true,
        Karima: true,
        Fang: true,
        Agouhanna: false,
      }' as second parameter `, () => {
    const expectedOutput = countOnly(firstNames, itemsToCount);
    assert.deepEqual(expectedOutput["Fang"], 2);
  });
  it(`returns undefined for 'Agouhanna' as first parameter and  '{
        Jason: true,
        Karima: true,
        Fang: true,
        Agouhanna: false,
      }' as second parameter `, () => {
    const expectedOutput = countOnly(firstNames, itemsToCount);
    assert.deepEqual(expectedOutput["Agouhanna"], undefined);
  });
});
