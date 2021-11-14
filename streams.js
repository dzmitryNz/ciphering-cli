const readStream = fileSystem.createReadStream("input.txt");
const writeStream = fileSystem.createWriteStream("output.txt");

readStream.on('data', function(chunk) {
  text = decodeCaeser(chunk.toString())
  writeStream.write(text)
})

