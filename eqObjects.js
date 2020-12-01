const eqObjects = (object1, object2) => {
  let result = true;
  if (!Array.isArray(object1) && !Array.isArray(object2)) {
    if (Object.keys(object1).length === Object.keys(object2).length) {
      for (const key in object1) {
        if (
          object2[key] &&
          !Array.isArray(object1[key]) &&
          !Array.isArray(object2[key])
        ) {
          if (
            typeof object1[key] === "object" &&
            typeof object2[key] === "object"
          ) {
            return (result = eqObjects(object1[key], object2[key]));
          } else {
            if (object1[key] !== object2[key]) return (result = false);
            else return (result = true);
          }
        } else return (result = false);
      }
    } else return (result = false);
  } else return (result = false);
  return result;
};

module.exports = eqObjects;
