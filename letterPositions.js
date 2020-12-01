const letterPositions = function (sentence) {
  const results = {};
  let indexCounter = 0;
  for (const char of sentence) {
    if (char !== " ") {
      if (results[char]) {
        results[char].push(indexCounter);
      } else {
        results[char] = [indexCounter];
      }
    }
    indexCounter++;
  }
  return results;
};

module.exports = letterPositions;
