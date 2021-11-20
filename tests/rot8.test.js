const caesar = require('../src/rot8');

test('Caesar encoding testing', () => {
  expect(caesar('How Are You! Русские символы', '0')).toBe('Zgo Sjw Qgm! Русские символы');
});

test('Caesar decoding testing', () => {
  expect(caesar('Zgo Sjw Qgm! Русские символы', '1')).toBe('How Are You! Русские символы');
});
