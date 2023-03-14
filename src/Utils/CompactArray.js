export const compactArray = (array) => {
  return array.filter((value) =>
    value !== "" &&
    value !== null &&
    value !== 0 &&
    value !== typeof(undefined)
  );
}