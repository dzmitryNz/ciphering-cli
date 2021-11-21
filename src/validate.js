const fs = require('fs');

function Validate(props) {
  const { input, output, config } = props;
  let result = 'ciphering chain: ';

  if (config === undefined) process.exit(1);

  if (input) {
    try {
      fs.readFileSync(input);
    } catch (err) {
      if (err.code === 'ENOENT') process.exit(4);
    }
  }

  console.log(`source: ${input || 'console'}`);

  if (output) {
    try {
      fs.readFileSync(output);
    } catch (err) {
    // console.log(err);
      if (err.code === 'ENOENT') process.exit(5);
    }
  }
  console.log(`target: ${output || 'console'}`);

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

  console.log(result);
  return chain;
}

module.exports = Validate;
