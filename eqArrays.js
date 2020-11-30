const eqArrays = (arrayOne, arrayTwo) => {
  let result = true;
  if (Array.isArray(arrayOne) && Array.isArray(arrayTwo)) {
    if (arrayOne.length === arrayTwo.length) {
      for (let i = 0; i < arrayOne.length; i++) {
        if (Array.isArray(arrayOne[i])) {
          result = eqArrays(arrayOne[i], arrayTwo[i]);
        } else {
          if (arrayOne[i] !== arrayTwo[i]) return (result = false);
        }
      }
    } else result = false;
  } else result = false;
  return result;
};

module.exports = eqArrays;
