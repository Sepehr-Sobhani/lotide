const checkEvenLength = (array) => {
  return array.length % 2 === 0 ? true : false;
};

const showMiddle = (array) => {
  if (array.length < 3) return [];
  else {
    if (checkEvenLength(array))
      return array.slice(array.length / 2 - 1, array.length / 2 + 1);
    else return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = showMiddle;
