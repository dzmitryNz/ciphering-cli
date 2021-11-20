const fs = require('fs');

function Validate(props) {
  const { input, output, config } = props;
  let result = 'cipering chain: ';

  if (config === undefined) process.exit(1);

  if (input) {
    try {
      fs.readFileSync(input);
    } catch (err) {
    // console.log(err);
      if (err.code === 'ENOENT') process.exit(4);
    }
  }

  console.log('\x1b[33m%s\x1b[0m', `source: ${input || 'console'}`);

  if (output) {
    try {
      fs.readFileSync(output);
    } catch (err) {
    // console.log(err);
      if (err.code === 'ENOENT') process.exit(5);
    }
  }
  console.log('\x1b[34m%s\x1b[0m', `target: ${output || 'console'}`);

  const chain = [];
  const splitedConfig = config.split('-');
  splitedConfig.map((el) => {
    if (el.length > 2) process.exit(3);
    if (el[0]) {
      if (el[0].match(/C|R|A/)) {
        if (el[0] === 'C') {
          if (el[1] === '1' || el[1] === '0') {
            if (el[1] === '0') result += ' encode Caesar >';
            if (el[1] === '1') result += ' decode Caesar >';
          } else process.exit(3);
        }
        if (el[0] === 'R') {
          if (el[1] === '1' || el[1] === '0') {
            if (el[1] === '0') result += ' encode Rot8 >';
            if (el[1] === '1') result += ' decode Rot8 >';
          } else process.exit(3);
        }
        if (el[0] === 'A') {
          if (el[1]) process.exit(3);
          result += ' Atbash cipher >';
        }
      } else process.exit(3);
    } else process.exit(1);
    chain.push(el);

    return 'done!';
  });
  result += ' RESULT';

  console.log('\x1b[32m', result, '\x1b[0m');
  return chain;
}

module.exports = Validate;
