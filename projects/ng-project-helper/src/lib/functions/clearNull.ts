export function clearNull(clearingObject: object): object {
  const newObject = clearingObject;
  Object.keys(newObject).forEach(key => {
    if (!newObject[key] && newObject[key] !== false || Array.isArray(newObject[key]) && !newObject[key].length) {
      delete newObject[key];
    }
  });

  return newObject;
}
