/* eslint-disable no-param-reassign */
export default function maskit(value, mask, masked = true, tokens) {
  value = value || '';
  mask = mask || '';
  let iMask = 0;
  let iValue = 0;
  let output = '';
  let cMask = '';
  while (iMask < mask.length && iValue < value.length) {
    cMask = mask[iMask];
    const masker = tokens[cMask];
    const cValue = value[iValue];
    if (masker && !masker.escape) {
      if (masker.pattern.test(cValue)) {
        output += masker.transform ? masker.transform(cValue) : cValue;
        iMask += 1;
      }
      iValue += 1;
    } else {
      if (masker && masker.escape) {
        iMask += 1; // take the next mask char and treat it as char
        cMask = mask[iMask];
      }
      if (masked) output += cMask;
      if (cValue === cMask) iValue += 1; // user typed the same char
      iMask += 1;
    }
  }

  // fix mask that ends with a char: (#)
  let restOutput = '';
  if (masked) {
    while (iMask < mask.length) {
      cMask = mask[iMask];
      if (tokens[cMask]) {
        restOutput = '';
        break;
      }
      restOutput += cMask;
      iMask += 1;
    }
  }

  return output + restOutput;
}
