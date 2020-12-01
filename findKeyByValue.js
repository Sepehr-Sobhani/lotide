const findKeyByValue = (obj, value) => {
  let outputKey;
  for (const key in obj) {
    if (obj[key] === value) outputKey = key;
  }
  return outputKey;
};

module.exports = findKeyByValue;


