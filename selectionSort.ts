import { swap } from './util';

export function selectionSort(array) {
  for (let i = 0; i<array.length; i++) {
    let min = i;
    for(let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    swap(array, min, i);
  }
  return array;
}