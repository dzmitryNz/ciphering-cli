/* eslint-disable no-continue */
function Atbash(str) {
  const alphabetUp = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];

  const alphabetLow = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ];

  let result = '';
  let alphabet = [];
  let alphabetReversed = [];

  for (let i = 0; i < str.length; i += 1) {
    const char = str.charCodeAt(i);
    if (char > 64 && char < 91) alphabet = alphabetUp;
    if (char > 96 && char < 123) alphabet = alphabetLow;
    alphabetReversed = [...alphabet].reverse();
    if (alphabet.indexOf(str[i]) === -1) {
      result += str[i];
      continue;
    }
    const index = alphabet.indexOf(str[i]);
    result += alphabetReversed[index];
  }

  return result;
}

module.exports = Atbash;
