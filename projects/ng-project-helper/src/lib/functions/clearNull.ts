export function clearNull(clearingObject: object): object {
  const newObject = clearingObject;
  Object.keys(newObject).forEach(key => {
    if (!newObject[key]) {
      delete newObject[key];
    }
  });

  return newObject;
}
