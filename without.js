const without = (source, itemToRemove) => {
  let newArray = [];
  for (let number of source) {
    if (!itemToRemove.includes(number)) newArray.push(number);
  }
  return newArray;
};

module.exports = without;
