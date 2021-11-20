const validate = require('../src/validate');

const configNormRef = ['C0', 'C1', 'R1', 'R0', 'A'];
const configWrongRef = ['C', '1', 'R', '0', 'A1', 'c1', 1, 0, 'Cdd', 'Cddfsdfsd0', 'cdfsdf'];
let inputFile;
let outputFile;
let configNorm;
let configWrong;
const maxConfigLength = 5;

function setConfig(config) {
  const defConf = config === configNormRef ? 'C1' : 'c';
  const result = [];
  const randLength = Math.floor(Math.random() * maxConfigLength);
  if (randLength < 1) result.push(defConf);
  [...Array(randLength)].map(() => {
    const rndConf = Math.floor(Math.random() * config.length);
    result.push(config[rndConf]);
    return rndConf;
  });
  return result.join('-');
}

describe('Validate tests', () => {
  let testOut = [];
  const consoleLog = console.log;
  const testConsoleLog = (out) => { testOut.push(out); };

  beforeEach(() => {
    console.log = testConsoleLog;
    testOut = [];
  });

  afterEach(() => {
    console.log = consoleLog;
  });

  beforeEach(() => {
    inputFile = 'inputFile.txt';
    outputFile = 'outputFile.txt';
    configNorm = setConfig(configNormRef);
    configWrong = setConfig(configWrongRef);
  });

  [...Array(20)].map(() => {
    test('Validate normal config props test', () => {
      expect(validate({ input: inputFile, output: outputFile, config: configNorm })).toEqual(configNorm.split('-'));
      expect(testOut).toHaveLength(3);
      expect(testOut[0]).toBe('source: inputFile.txt');
      expect(testOut[1]).toBe('target: outputFile.txt');
    });
    return 'End';
  });

  [...Array(30)].map(() => {
    it('Validate wrong config props test', async () => {
      const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((num) => { throw new Error(`process.exit: ${num}`); });
      expect(() => {
        validate({ input: inputFile, output: outputFile, config: configWrong });
      }).toThrow();
      expect(mockExit).toHaveBeenCalledWith(3);
      mockExit.mockRestore();
    });
    return 'End';
  });

  it('Validate no config test', async () => {
    const mockExit = jest.spyOn(process, 'exit')
      .mockImplementation((num) => { throw new Error(`process.exit: ${num}`); });
    expect(() => {
      validate({ input: inputFile, output: outputFile });
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });

  it('Validate empty string config test', async () => {
    const mockExit = jest.spyOn(process, 'exit')
      .mockImplementation((num) => { throw new Error(`process.exit: ${num}`); });
    expect(() => {
      validate({ input: inputFile, output: outputFile, config: '' });
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });

  test('Validate no input test', () => {
    expect(validate({ output: 'outputFile.txt', config: configNorm })).toEqual(configNorm.split('-'));
    expect(testOut).toHaveLength(3);
    expect(testOut[0]).toBe('source: console');
    expect(testOut[1]).toBe('target: outputFile.txt');
  });

  test('Validate no output test', () => {
    expect(validate({ input: 'inputFile.txt', config: configNorm })).toEqual(configNorm.split('-'));
    expect(testOut).toHaveLength(3);
    expect(testOut[0]).toBe('source: inputFile.txt');
    expect(testOut[1]).toBe('target: console');
  });

  it('Validate wrong output test', async () => {
    const mockExit = jest.spyOn(process, 'exit')
      .mockImplementation((num) => { throw new Error(`process.exit: ${num}`); });
    expect(() => {
      validate({ output: 'output.txt', config: configNorm });
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(5);
    mockExit.mockRestore();
    expect(testOut).toHaveLength(1);
    expect(testOut[0]).toBe('source: console');
  });

  it('Validate wrong input test', async () => {
    const mockExit = jest.spyOn(process, 'exit')
      .mockImplementation((num) => { throw new Error(`process.exit: ${num}`); });
    expect(() => {
      validate({ input: 'output.txt', config: configNorm });
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(4);
    mockExit.mockRestore();
  });
});
