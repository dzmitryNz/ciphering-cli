const validate = require('../src/validate');

test('Validate normal testing', () => {
  expect(validate({ input: 'inputFile.txt', output: 'outputFile.txt', config: 'C1-C0' })).toEqual(['C1', 'C0']);
});

test('Validate no input testing', () => {
  expect(validate({ output: 'outputFile.txt', config: 'C1-C0' })).toEqual(['C1', 'C0']);
});

test('Validate no output testing', () => {
  expect(validate({ input: 'inputFile.txt', config: 'C1-C0' })).toEqual(['C1', 'C0']);
});

test('Validate wrong output testing', () => {
  expect(validate({ output: 'output.txt', config: 'C1-C0' })).toEqual(['C1', 'C0']);
});
