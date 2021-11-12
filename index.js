const fs = require('fs');
const Rot8 = require('./rot8');
// const Caesar = require('./caesar');
const fileWrite = require('./write');
const fileRead = require('./read');
// const { Readable, Writable, Transform } = require('stream');

const { stdin, stdout, stderr } = process;
let inpt, outpt, log;

const inputConfig = {};

process.on('exit', (code) => {
  if (code === 0) {
    stdout.write('Всё готово!!! All done!!!');
  } else {
    if (code === 1) stderr.write('Error! Config is not present. Example config: C1-A-R0-C0');
    if (code === 2) stderr.write('Error! Doubled argument present ');
    if (code === 3) stderr.write('Error! Config is wrong. Example config: C1-A-R0-C0');
    if (code === 4) stderr.write('Error! No such file or directory');
    if (code === 5) stderr.write('Write Error! No such file or directory');
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

const { config, input, output } = inputConfig;

if (config === undefined) process.exit(1);

if (!input) inpt = stdin;
else inpt = fileRead(input);
// else inpt = fs.createReadStream(config.input, {});

if (!output) outpt = stdout;
else outpt = (data, path) => fileWrite(data, path);
// else output = fs.createWriteStream(config.output, {});

const chain = [];

const splitedConfig = config.split('-');
splitedConfig.map((el) => {
  if (el[0]) {
    if (!el[0].match(/C|R|A/)) process.exit(3);
    if (el[0].match(/C|R/) && !el[1].match(/1|0/)) process.exit(3);
  } else process.exit(1);
  chain.push(el);
  return 'done';
});

// inpt = fileRead(config.input);
console.log('readed -', inpt);
const result = Rot8(inpt, 0);
console.log('hashed -', result);
const result2 = Rot8(result, 1);
console.log('dehashed -', result2);
outpt(result, output);

// input.pipe(rot).pipe(stdout);

console.log('\x1b[33m%s\x1b[0m', inputConfig);

// const inputArr = '';

// read.pipe(inputArr);

// console.log(inputArr);

// chain.map((iter) => {

// })


// -c, --config: config for ciphers Config is a string with pattern {XY(-)}n, where:
// X is a cipher mark:
// C is for Caesar cipher (with shift 1)
// A is for Atbash cipher
// R is for ROT-8 cipher
// Y is flag of encoding or decoding
// (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
// 1 is for encoding
// 0 is for decoding

// If the input file option is missed - use stdin as an input source.

// If the output file option is missed - use stdout as an output destination.

// If the input and/or output file is given but doesn't exist or you can't
// access it (e.g. because of permissions or it's a directory) - human-friendly
// error should be printed in stderr and the process should exit with non-zero status code.

// If passed params are fine the output (file or stdout) should contain
// transformed content of input (file or stdin).

// For encoding/decoding use only the English alphabet, all other characters
// should be kept untouched.

// Using streams for reading, writing and transformation of text is mandatory.

// Each cipher is implemented in the form of a transform stream.
// Streams are piped inside each other according to config (you can use .pipe
// streams instances method or pipeline)
