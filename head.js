const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("LHL", "LHL");
assertEqual("LHL", "lhl");
assertEqual(25, 25);
assertEqual(25, 30);

const head = (array) => {
  return array[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([10]), 10);
assertEqual(head([]), undefined);
