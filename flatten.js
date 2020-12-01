const flatten = (array) => {
  let flattenedArray = [];
  for (let value of array) {
    if (Array.isArray(value)) {
      for (let nestedValue of value) flattenedArray.push(nestedValue);
    } else flattenedArray.push(value);
  }
  return flattenedArray;
};

module.exports = flatten;



