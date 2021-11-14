function Caesar(str, direction) {
  let result = '';
  const shift = direction ? -1 : 1;
  const compensation = 26;
  console.log(str, str.length, direction, shift, compensation);

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
    if (alphabetUp.indexOf(smb) !== -1) {
      indx = alphabetUp.indexOf(smb) + shift;
      if (indx > 25) indx -= compensation;
      if (indx < 0) indx += compensation;
      res = alphabetUp[indx];
    }

    if (alphabetLow.indexOf(smb) !== -1) {
      indx = alphabetLow.indexOf(smb) + shift;
      if (indx > 25) indx -= compensation;
      if (indx < 0) indx += compensation;
      res = alphabetLow[indx];
    }
    result += res;
  }
  return result;
}

module.exports = Caesar;
