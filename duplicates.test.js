const { findSumOfDuplicates } = require('./duplicates');

test('When [7, 2, 7, 7, 9, 5, 2] is passed, returns 25', () => {
  expect(findSumOfDuplicates([7, 2, 7, 7, 9, 5, 2])).toBe(25);
});

test('When [7, 2, 7, 7, 9, 5] is passed, returns 20', () => {
  expect(findSumOfDuplicates([7, 2, 7, 9, 5, 2, 2])).toBe(20);
});

test('When [1, 2, 3] is passed, returns 0', () => {
  expect(findSumOfDuplicates([1, 2, 3])).toBe(0);
});
