const fs = require('fs');
const path = require('path');
const { Readable, Writable, Transform } = require('stream');

function readFile() {
  const data = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8');
  console.log(data);
}

function writeFile() {
  fs.appendFileSync(path.join(__dirname, 'my-new-file.txt'), '\nGoodbye', 'utf8');
}

readFile();
writeFile();

const writePath = './output.txt';
const readPath = './input.txt';

const write = fs.createWriteStream(writePath, {});
const read = fs.createReadStream(readPath, {});

console.log(write, read);
