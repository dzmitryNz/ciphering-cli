const chaining = require('../src/chaining');

let config1;
let config2;
let config3;
let config4;
let strIn;
let strOut1;
let strOut2;
let strOut3;
let strOut4;
let mock;

describe('Chaining tests', () => {
  beforeEach(() => {
    config1 = 'C0-C1-R1-R0-A-A';
    config2 = 'C1-C0-A-R1-R0-A-R0-R0-C1-A';
    config3 = 'A-A-A-R1-R0-R0-R0-C1-C1-A';
    config4 = 'C1-R1-C0-C0-A-R0-R1-R1-A-C1';
    strIn = 'This is secret. Message about "_" symbol!';
    strOut1 = 'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!';
    strOut2 = 'Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!';
    strOut3 = 'Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!';
    strOut4 = 'This is secret. Message about "_" symbol!';
    mock = jest.fn((x) => x);
  });

  // test('Chaining task1 test', () => {
  //   expect(chaining({ config: config1 })).toEqual(strOut1);
  // });
});
// test('Validate wrong config test', () => {
//   function vTest() {
//     validate({ output: 'output.txt', input: 'inputFile.txt', config: configWrong });
//   }
//   expect(vTest).toThrowError(/3/);
// });
// it('tests myFunc with process.exit', async () => {
//   const mockExit = jest.spyOn(process, 'exit')
//     .mockImplementation((number) => { throw new Error(`process.exit: ${number}`); });
//   expect(() => {
//     validate({ output: 'output.txt', config: configWrong });
//   }).toThrow();
//   expect(mockExit).toHaveBeenCalledWith("1");
//   mockExit.mockRestore();
// });
