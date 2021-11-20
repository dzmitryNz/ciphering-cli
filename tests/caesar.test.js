const caesar = require('../src/caesar');

test('Caesar encoding testing', () => {
  expect(caesar('How Are You! Русские символы', '0')).toBe('Gnv Zqd Xnt! Русские символы');
});

test('Caesar decoding testing', () => {
  expect(caesar('Gnv Zqd Xnt! Русские символы', '1')).toBe('How Are You! Русские символы');
});
