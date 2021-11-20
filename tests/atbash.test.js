const atbash = require('../src/atbash');

// let mock;
let strIn;
let strOut;

describe('Atbash tests', () => {
  beforeEach(() => {
    strIn = 'How Are You! Русские символы';
    strOut = 'Sld Ziv Blf! Русские символы';
    // mock = jest.fn((x) => x );
  });

  test('Atbash encoding test', () => {
    expect(atbash(strIn)).toBe(strOut);
  });

  test('Atbash decoding test', () => {
    expect(atbash(strOut)).toBe(strIn);
  });

  test('Atbash encoding - decoding test', () => {
    const result1 = atbash(strIn);
    expect(atbash(result1, '1')).toBe(strIn);
  });
});
