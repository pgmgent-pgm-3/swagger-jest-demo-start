import { compactArray } from "./CompactArray.js";

test('If my array removes null, empty strings and undefined values', () => {
  const randomArray = [ 1, 0, null, undefined, "" ];
  expect(compactArray(randomArray)).toEqual([ 1 ]);
});