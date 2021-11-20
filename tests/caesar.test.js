const caesar = require('../src/caesar');

let strIn;
let strOut;
// let mock;

describe('Caesar tests', () => {
  beforeEach(() => {
    strIn = 'How Are You! Русские символы';
    strOut = 'Gnv Zqd Xnt! Русские символы';
    // mock = jest.fn((x) => x);
  });

  test('Caesar encoding test', () => {
    expect(caesar(strIn, '0')).toBe(strOut);
  });

  test('Caesar decoding test', () => {
    expect(caesar(strOut, '1')).toBe(strIn);
  });

  test('Caesar encoding - decoding test', () => {
    const result1 = caesar(strIn, '0');
    expect(caesar(result1, '1')).toBe(strIn);
  });
});
