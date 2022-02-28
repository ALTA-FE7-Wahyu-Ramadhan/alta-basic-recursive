const primeX = require("./problem1");

test("Test 1", () => {
  expect(primeX(1)).toEqual(2);
});
test("Test 2", () => {
  expect(primeX(5)).toEqual(11);
});
test("Test 3", () => {
  expect(primeX(8)).toEqual(19);
});
test("Test 4", () => {
  expect(primeX(9)).toEqual(23);
});
test("Test 5", () => {
  expect(primeX(10)).toEqual(29);
});
