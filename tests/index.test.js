const { spawn } = require('child_process');
const fs = require('fs');

jest.mock('fs');

const expectedsResults = [
  /Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!/,
  /Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!/,
  /Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!/,
  /This is secret. Message about "_" symbol!/,
];

const configs = [
  'C1-C1-R0-A',
  'C1-C0-A-R1-R0-A-R0-R0-C1-A',
  'A-A-A-R1-R0-R0-R0-C1-C1-A',
  'C1-R1-C0-C0-A-R0-R1-R1-A-C1',
];

const configNormRef = ['C0', 'C1', 'R1', 'R0', 'A'];
const configWrongRef = ['C', '1', 'R', '0', 'A1', 'c1', 1, 0, 'Cdd', 'Cddfsdfsd0', 'cdfsdf'];
const inputFile = './inputFile.txt';
const maxConfigLength = 10;

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

let result = '';

describe('CLI success scenarios', () => {
  beforeEach(() => {
    result = '';
  });

  configs.map((el, i) => {
    it(`Task1 test - ${i + 1}`, () => {
      const cp = spawn('node', ['index.js', '-i', inputFile, '-c', el]);
      cp.stdout.on('data', (chunk) => {
        const res = chunk.toString();
        result += res;
      });

      cp.stdout.on('end', () => {
        result = result.trim('\n');
        expect(result).toEqual(expect.stringMatching(expectedsResults[i]));
      });
    });
    return 'Done!';
  });
});

describe('CLI error scenarios', () => {
  it('Wrong inputFile prop test', () => {
    const cp = spawn('node', ['index.js', '-i', 'input.txt', '-c', configs[0]]);
    fs.existsSync.mockReturnValue(false);
    cp.stderr.on('data', (data) => {
      expect(data.toString().trim()).toEqual('Error! No such Input file or directory');
    });
  });

  it('Wrong outputFile prop test', () => {
    const cp = spawn('node', ['index.js', '-o', 'output.txt', '-c', configs[0]]);
    fs.existsSync.mockReturnValue(false);
    cp.stderr.on('data', (data) => {
      expect(data.toString().trim()).toEqual('Error! No such Output file or directory');
    });
  });

  it('Without config prop test', () => {
    const cp = spawn('node', ['index.js', '-o', 'output.txt']);
    cp.stderr.on('data', (data) => {
      expect(data.toString().trim()).toEqual('Error! Config is not present. Example config: C1-A-R0-C0');
    });
  });

  it('Dubble prop test', () => {
    const cp = spawn('node', ['index.js', '-c', configs[0], '--config', configs[1]]);
    cp.stderr.on('data', (data) => {
      expect(data.toString().trim()).toEqual('Error! Doubled argument present');
    });
  });

  [...Array(30)].map((el, i) => {
    it(`Wrong config test ${i + 1}`, () => {
      const cp = spawn('node', ['index.js', '-c', setConfig(configWrongRef)]);
      cp.stderr.on('data', (data) => {
        expect(data.toString().trim()).toEqual(
          'Error! Config is wrong. Example config: C1-A-R0-C0',
        );
      });
    });
    return 'End!';
  });
});
