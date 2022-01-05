import { swap } from './util';

export function sortedSquaredArray(array) {
  let j;
  let out = [];
  if (array.length == 1) {
    return [array[0] * array[0]]
  }

  for (let i = 1; i < array.length; i++) {
    j = i;
    const square1 = array[j] * array[j];
    const square2 = array[j - 1] * array[j - 1];

    out.push(square1);

    if (j == 1) {
      out.push(square2);
    }

    while (j > 0 && out[j] < out[j - 1]) {
      swap(out, j, j - 1);
      j = j - 1;
    }
  }

  return out;
}
