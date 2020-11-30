const assertEqual = require("../assertEqual");
const tail = require("../tail");

assertEqual(tail([1]), []);
assertEqual(tail([]), []);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
