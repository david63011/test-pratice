const reverseString = require('./reversestring');

test('the string is being reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('hello')).not.toBe('hello');
});
