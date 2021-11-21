const { spawn } = require('child_process');
const chaining = require('../src/chaining');

// const strIn = 'This is secret. Message about "_" symbol!\n';
const chains = [
  ['C1', 'C1', 'R0', 'A'],
  ['C1', 'C0', 'A', 'R1', 'R0', 'A', 'R0', 'R0', 'C1', 'A'],
  ['A', 'A', 'A', 'R1', 'R0', 'R0', 'R0', 'C1', 'C1', 'A'],
  ['C1', 'R1', 'C0', 'C0', 'A', 'R0', 'R1', 'R1', 'A', 'C1'],
];
const strOuts = [
  'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!',
  'Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!',
  'Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!',
  'This is secret. Message about "_" symbol!',
];

describe('Chaining tests', () => {
  let testOut = [];
  const inputFile = './inputFile.txt';
  const consoleLog = console.log;
  const testConsoleLog = async (out) => { testOut.push(await out); };

  beforeEach(() => {
    console.log = async () => testConsoleLog;
    testOut = [];
  });

  afterEach(() => {
    console.log = consoleLog;
  });

  it('Chaining task1 test', async () => {
    const res = await chaining({ input: inputFile, chain: chains[0] });
    expect(testOut).toHaveLength(0);
    // expect(await testOut[0]).toBe(strOuts[i]);
    // expect(await testOut[1]).toBe('target: outputFile.txt');
  });
});
