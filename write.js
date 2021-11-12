const fs = require('fs');

function fileWrite(data, outputPath) {
  try {
    fs.appendFileSync(outputPath, data);
  } catch (err) {
    console.log(err);
    process.exit(5);
  }
}

module.exports = fileWrite;
