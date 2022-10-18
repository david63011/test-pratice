const countCharacters = require('./countCharacters.js');

test('counts the number of characters in a string', () => {
  expect(countCharacters('hello')).toBe(5);
  if (countCharacters('hello') < 1 && countCharacters('hello') >= 10) {
    throw Error('The string is too short or too long');
  }
});
