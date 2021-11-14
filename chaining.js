const { Transform, pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');
const Caesar = require('./caesar');
const Rot8 = require('./rot8');
const Atbash = require('./atbash');

const { stdin, stdout } = process;

function Chaining(props) {
  let readable;
  let writable;
  const { input, output, chain } = props;
  if (input) readable = createReadStream(input);
  else readable = stdin;
  if (output) writable = createWriteStream(output);
  else writable = stdout;

  readable.on('data', (chunk) => {
    chunk.toString();
  });

  const transform = new Transform({
    transform(chunk, enc, cb) {
      const chunkStringified = chunk.toString().trim();
      let result = chunkStringified;
      chain.map((iter) => {
        // if (!output && result.match('unpipe terminal')) readable.unpipe();
        if (!input && result.match('unpipe terminal')) readable.unpipe();
        if (iter[0] === 'C') {
          const Caesared = Caesar(result, iter[1]);
          result = `${Caesared}\n`;
        }
        if (iter[0] === 'R') {
          const Roted = Rot8(result, iter[1]);
          result = `${Roted}\n`;
        }
        if (iter[0] === 'A') {
          const Atbashed = Atbash(result);
          result = `${Atbashed}\n`;
        }
        return 'Done!';
      });

      this.push(result);

      cb();
    },
  });

  pipeline(
    readable, transform, writable, () => { },
  );
}

module.exports = Chaining;
