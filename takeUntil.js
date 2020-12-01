const takeUntil = function (array, callback) {
  let result = array.map(callback);
  return array.slice(0, result.indexOf(true));
};


module.exports = takeUntil;
