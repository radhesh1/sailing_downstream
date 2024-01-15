// test.js

const processList = require('./main');

test('Valid input list', () => {
  const inputList = Array.from({ length: 20 }, (_, index) => index + 1);
  const result = processList(inputList);
  expect(result).toEqual([1, 5, 7, 11, 13, 17, 19]);
});

test('Invalid input list length', () => {
  const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(() => processList(inputList)).toThrow('List length must be a multiple of 10');
});
