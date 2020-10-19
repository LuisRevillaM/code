import { swap } from './util';

export function insersionSort(array) {
  let j;
  for(let i = 1; i<array.length; i++) {
    j=i;
    while(j>0 && array[j] < array[j-1]) {
      swap(array, j, j-1);
      j = j - 1;
    }
  }
}