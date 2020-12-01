const findKey = (object, callback) => {
  const listOfObjects = Object.keys(object).filter((key) =>
    callback(object[key])
  );
  return listOfObjects[0];
};



module.exports = findKey;
