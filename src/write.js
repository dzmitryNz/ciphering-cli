const { createWriteStream } = require('fs');

const writable = createWriteStream('./output.txt');

writable.cork();

writable.write('First Line\n');
writable.write('First Line\n');
writable.write('First Line\n');
writable.write('First Line\n');
writable.end('Finish line\n');

writable.uncork();
