/* eslint-disable no-continue */
function Atbash(str) {
  const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ];

  const alphabetReversed = alphabet.reverse();

  const result = [];
  
  for (let i = 0; i < str.length; i += 1) {
    if (alphabet.indexOf(str[i]) === -1) {
      result.push(str[i]);
      continue;
    }
    for (let j = 0; j < alphabet.length; j += 1) {
      if (str[i] === alphabet[j]) result.push(alphabetReversed[j]);
    }
  }

  return result.join('');
}

module.exports = Atbash;
