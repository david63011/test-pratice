const Calculator = require('./calculator');

const calc = new Calculator();

describe('Add check', () => {
  test('properly adds two numbers', () => {
    expect(calc.add(1, 2)).toBe(3);
  });
  test('test 2', () => {
    expect(calc.add(1, 2)).not.toBe(4);
  });
  test('test 3', () => {
    expect(calc.add(1, 2)).not.toBe(5);
  });
});

describe('Subtract check', () => {
  test('properly subtracts two numbers', () => {
    expect(calc.subtract(1, 2)).toBe(-1);
  });
  test('test 2', () => {
    expect(calc.subtract(1, 2)).not.toBe(0);
  });
  test('test 3', () => {
    expect(calc.subtract(1, 2)).not.toBe(1);
  });
});

describe('Multiply check', () => {
  test('properly multiplies two numbers', () => {
    expect(calc.multiply(1, 2)).toBe(2);
  });
  test('test 2', () => {
    expect(calc.multiply(1, 2)).not.toBe(3);
  });
  test('test 3', () => {
    expect(calc.multiply(1, 2)).not.toBe(4);
  });
});

describe('Divide check', () => {
  test('properly divides two numbers', () => {
    expect(calc.divide(1, 2)).toBe(0.5);
  });
  test('test 2', () => {
    expect(calc.divide(1, 2)).not.toBe(1);
  });
  test('test 3', () => {
    expect(calc.divide(1, 2)).not.toBe(2);
  });
});
