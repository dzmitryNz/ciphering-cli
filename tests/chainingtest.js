const chaining = require('../src/chaining');

const strIn = 'This is secret. Message about "_" symbol!';
const configs = [
  'C0-C1-R1-R0-A-A',
  'C1-C0-A-R1-R0-A-R0-R0-C1-A',
  'A-A-A-R1-R0-R0-R0-C1-C1-A',
  'C1-R1-C0-C0-A-R0-R1-R1-A-C1'];
const strOuts = [
  'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!',
  'Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!',
  'Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!',
  'This is secret. Message about "_" symbol!',
];

describe('Chaining tests', () => {
  let testOut = [];
  const consoleLog = console.log;
  const testConsoleLog = (out) => { testOut.push(out); };

  beforeEach(() => {
    console.log = testConsoleLog;
    testOut = [];
  });

  configs.map((el, i) => {
    it('Chaining task1 testw', async () => {
      const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((num) => { throw new Error(`process.exit: ${num}`); });
      expect(() => {
        chaining({ config: el });
      }).toThrow();
      expect(mockExit).toHaveBeenCalledWith(3);
      mockExit.mockRestore();
    });
    return 'End';
  });

  // test('Chaining task1 test', () => {
  //   expect(chaining({ config: config1 })).toEqual(strOut1);
  // });
});


//   it('Validate no config test', async () => {
//     const mockExit = jest.spyOn(process, 'exit')
//       .mockImplementation((num) => { throw new Error(`process.exit: ${num}`); });
//     expect(() => {
//       validate({ input: inputFile, output: outputFile });
//     }).toThrow();
//     expect(mockExit).toHaveBeenCalledWith(1);
//     mockExit.mockRestore();
//   });

//   it('Validate empty string config test', async () => {
//     const mockExit = jest.spyOn(process, 'exit')
//       .mockImplementation((num) => { throw new Error(`process.exit: ${num}`); });
//     expect(() => {
//       validate({ input: inputFile, output: outputFile, config: '' });
//     }).toThrow();
//     expect(mockExit).toHaveBeenCalledWith(1);
//     mockExit.mockRestore();
//   });

//   test('Validate no input test', () => {
//     expect(validate({ output: 'outputFile.txt', config: configNorm })).toEqual(configNorm.split('-'));
//     expect(testOut).toHaveLength(3);
//     expect(testOut[0]).toBe('source: console');
//     expect(testOut[1]).toBe('target: outputFile.txt');
//   });

//   test('Validate no output test', () => {
//     expect(validate({ input: 'inputFile.txt', config: configNorm })).toEqual(configNorm.split('-'));
//     expect(testOut).toHaveLength(3);
//     expect(testOut[0]).toBe('source: inputFile.txt');
//     expect(testOut[1]).toBe('target: console');
//   });

//   it('Validate wrong output test', async () => {
//     const mockExit = jest.spyOn(process, 'exit')
//       .mockImplementation((num) => { throw new Error(`process.exit: ${num}`); });
//     expect(() => {
//       validate({ output: 'output.txt', config: configNorm });
//     }).toThrow();
//     expect(mockExit).toHaveBeenCalledWith(5);
//     mockExit.mockRestore();
//     expect(testOut).toHaveLength(1);
//     expect(testOut[0]).toBe('source: console');
//   });

//   it('Validate wrong input test', async () => {
//     const mockExit = jest.spyOn(process, 'exit')
//       .mockImplementation((num) => { throw new Error(`process.exit: ${num}`); });
//     expect(() => {
//       validate({ input: 'output.txt', config: configNorm });
//     }).toThrow();
//     expect(mockExit).toHaveBeenCalledWith(4);
//     mockExit.mockRestore();
//   });
// });


