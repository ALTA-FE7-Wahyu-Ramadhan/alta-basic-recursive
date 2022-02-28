const maxSequence = require("./problem4");

test("Test 1", () => {
  expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
});
test("Test 2", () => {
  expect(maxSequence([-2, -5, 6, -2, -3, 1, 5, -6])).toEqual(7);
});
test("Test 3", () => {
  expect(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual(7);
});
test("Test 4", () => {
  expect(maxSequence([-2, -5, 6, -2, -3, 1, 6, -6])).toEqual(8);
});
test("Test 5", () => {
  expect(maxSequence([-2, -5, 6, 2, -3, 1, 6, -6])).toEqual(12);
});
