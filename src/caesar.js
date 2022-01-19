function Caesar(str, direction) {
  let result = '';
  const shift = direction === '0' ? -1 : 1;
  const compensation = 26;
  const lastAlphabetIndx = 25;
  const firstAlphabetIndx = 0;

  const alphabetUp = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];

  const alphabetLow = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ];

  for (let i = 0; i < str.length; i += 1) {
    const smb = str[i];
    let res = smb;
    let indx = 0;
    let alphabet;

    if (alphabetUp.indexOf(smb) !== -1) alphabet = alphabetUp;
    if (alphabetLow.indexOf(smb) !== -1) alphabet = alphabetLow;
    if (alphabet) {
      indx = alphabet.indexOf(smb) + shift;
      if (indx > lastAlphabetIndx) indx -= compensation;
      if (indx < firstAlphabetIndx) indx += compensation;
      res = alphabet[indx];
    }
    result += res;
  }
  return result;
}

module.exports = Caesar;
