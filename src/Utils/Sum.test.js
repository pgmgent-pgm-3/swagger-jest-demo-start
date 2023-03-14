import { sum } from "./Sum.js";

test("1 + 2 to be equal to 3", () => {
  const sumResult = sum(1, 2);
  expect(sumResult).toBe(3);
  expect(sumResult).toBeGreaterThanOrEqual(3);
});