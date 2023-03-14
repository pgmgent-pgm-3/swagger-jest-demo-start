import { cloneArray } from "./CloneArray.js";

test("Expect a clone of an array", () => {
  const randomArray = [1, "test", 4, .3];
  expect(cloneArray(randomArray)).toEqual(randomArray);
})