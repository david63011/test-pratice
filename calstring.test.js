const capFirstLetter = require('./capstring.js');

test('properly capitalizes the first letter of a string', () => {
  expect(capFirstLetter('hello')).toBe('Hello');
  expect(capFirstLetter('hello')).not.toBe('hello');
});
