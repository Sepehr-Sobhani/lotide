const assertArraysEqual = require("../assertArraysEqual");
const showMiddle = require("../middle");

assertArraysEqual(showMiddle([1]), []);
assertArraysEqual(showMiddle([1, 2]), []);
assertArraysEqual(showMiddle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(showMiddle([1, 2, 3]), [2]);
assertArraysEqual(showMiddle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(showMiddle([1, 2, 3, 4, 5, 6]), [3, 4]);
