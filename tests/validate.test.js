// const { spawn } = require('child_process');
// const path = require('path');
const validate = require('../src/validate');

let inputFile;
let outputFile;
let configWrong;
let configNorm;
let configWrongRef;
let configNormRef;
// let mock;
const maxConfigLength = 5;

function setConfig(config) {
  const result = [];
  const randLength = Math.floor(Math.random() * maxConfigLength);
  [...Array(randLength)].map(() => {
    const rndConf = Math.floor(Math.random() * config.length);
    result.push(config[rndConf]);
    return rndConf;
  });
  if (result.length < 1) result.push('C1');
  return result.join('-');
}

describe('Validate tests', () => {
  beforeEach(() => {
    configNormRef = ['C0', 'C1', 'R1', 'R0', 'A'];
    configWrongRef = ['C', '1', 'R', '0', 'A1', 'c1', 1, 0];
    inputFile = 'inputFile.txt';
    outputFile = 'outputFile.txt';
    configNorm = setConfig(configNormRef);
    configWrong = setConfig(configWrongRef);
    // mock = jest.fn((x) => x);
  });

  [...Array(10)].map(() => {
    test('Validate normal props test', () => {
      expect(validate({ input: inputFile, output: outputFile, config: configNorm })).toEqual(configNorm.split('-'));
    });
  });

  test('Validate no input test', () => {
    expect(validate({ output: 'outputFile.txt', config: configNorm })).toEqual(configNorm.split('-'));
  });

  test('Validate no output test', () => {
    expect(validate({ input: 'inputFile.txt', config: configNorm })).toEqual(configNorm.split('-'));
  });

  test('Validate wrong output test', () => {
    expect(validate({ output: 'output.txt', config: configNorm })).toEqual(configNorm.split('-'));
  });

  // test('Validate wrong config test', () => {
  //   function vTest() {
  //     validate({ output: 'output.txt', input: 'inputFile.txt', config: configWrong });
  //   }
  //   expect(vTest).toThrowError(/3/);
  // });
});
// it('tests myFunc with process.exit', async () => {
//   const mockExit = jest.spyOn(process, 'exit')
//     .mockImplementation((number) => { throw new Error(`process.exit: ${number}`); });
//   expect(() => {
//     validate({ output: 'output.txt', config: configWrong });
//   }).toThrow();
//   expect(mockExit).toHaveBeenCalledWith("1");
//   mockExit.mockRestore();
// });
// describe('logger behaviour', () => {
//   it('logs out multiple params - 2 strings', (done) => {
//     const testAppFilePath = path.join(__dirname, './tests/validator.js');
//     const testApp = spawn('node', [testAppFilePath]);

//     testApp.stdout.on('data', (data) => {
//       const stdoutData = JSON.parse(data.toString());
//       expect(stdoutData.msg).toBe('param2');
//       expect(stdoutData.foo).toBe('bar');
//       testApp.kill('SIGINT');
//       done();
//     });
//   });
// });
