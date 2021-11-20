const { createReadStream } = require('fs');

function Read(inputPath) {
  const readable = inputPath ? createReadStream(inputPath) : process.stdin;

  let text = '';
  readable.on('data', (chunk) => {
    text += chunk.toString();
  });

  return text;
}

module.exports = Read;
