/* eslint-disable consistent-return */
const fs = require('fs');

function fileRead(inputPath) {
  try {
    return fs.readFileSync(inputPath, 'utf8');
  } catch (error) {
    console.log(error);
    if (error.code === 'ENOENT') process.exit(4);
  }
}

module.exports = fileRead;
