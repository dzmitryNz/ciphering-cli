const Validate = require('./src/validate');
const Chaining = require('./src/chaining');

const inputConfig = {};

const { stderr, stdout } = process;

process.on('exit', (code) => {
  if (code === 0) {
    stdout.write('Thanks. Good Luck!!!');
  } else {
    if (code === 1) stderr.write('Error! Config is not present. Example config: C1-A-R0-C0');
    if (code === 2) stderr.write('Error! Doubled argument present ');
    if (code === 3) stderr.write('Error! Config is wrong. Example config: C1-A-R0-C0');
    if (code === 4) stderr.write('Error! No such Input file or directory');
    if (code === 5) stderr.write('Error! No such Output file or directory');
  }
});

process.argv.forEach((val, index) => {
  let key = '';
  if (val === '-c' || val === '--config') key = 'config';
  if (val === '-o' || val === '--output') key = 'output';
  if (val === '-i' || val === '--input') key = 'input';

  if (inputConfig[key]) process.exit(2);

  if (key) inputConfig[key] = process.argv[index + 1];
});

inputConfig.chain = Validate(inputConfig);

Chaining(inputConfig);
