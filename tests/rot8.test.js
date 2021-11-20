const rot8 = require('../src/rot8');

let strIn;
let strOut;
// let mock;

describe('Rot8 tests', () => {
  beforeEach(() => {
    strIn = 'How Are You! Русские символы';
    strOut = 'Zgo Sjw Qgm! Русские символы';
    // mock = jest.fn((x) => x );
  });

  test('Rot8 encoding test', () => {
    expect(rot8(strIn, '0')).toBe(strOut);
  });

  test('Rot8 decoding testing', () => {
    expect(rot8(strOut, '1')).toBe(strIn);
  });

  test('Rot8 encoding - decoding test', () => {
    const result1 = rot8(strIn, '0');
    expect(rot8(result1, '1')).toBe(strIn);
  });
});
