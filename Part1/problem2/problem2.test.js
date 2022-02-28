const fibonacci = require("./problem2");

test("Test 1", () => {
  expect(fibonacci(0)).toEqual(0);
});
test("Test 2", () => {
  expect(fibonacci(2)).toEqual(1);
});
test("Test 3", () => {
  expect(fibonacci(9)).toEqual(34);
});
test("Test 4", () => {
  expect(fibonacci(10)).toEqual(55);
});
test("Test 5", () => {
  expect(fibonacci(12)).toEqual(144);
});
