/* eslint-disable no-continue */
function Rot8(str, direction) {
  const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ];

  const alphabet8 = [
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  ];

  const result = [];
  for (let i = 0; i < str.length; i += 1) {
    if (alphabet.indexOf(str[i]) === -1) {
      result.push(str[i]);
      continue;
    }
    for (let j = 0; j < alphabet.length; j += 1) {
      if (direction === 0) {
        if (str[i] === alphabet[j]) result.push(alphabet8[j]);
      }
      if (direction === 1) {
        if (str[i] === alphabet8[j]) result.push(alphabet[j]);
      }
    }
  }

  return result.join('');
}

module.exports = Rot8;
