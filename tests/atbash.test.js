const atbash = require('../src/atbash');

test('Atbash encoding testing', () => {
  expect(atbash('How Are You! Русские символы')).toBe('Sld Ziv Blf! Русские символы');
});

test('Atbash decoding testing', () => {
  expect(atbash('Sld Ziv Blf! Русские символы')).toBe('How Are You! Русские символы');
});
