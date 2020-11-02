import { swap } from './util';

function quickSort(array, low, high) {
  let partitionIndex;

  if (high - low > 0) {
    partitionIndex = partition(array, low, high);
    quickSort(array, low, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, high);
  }

  return array;
}

function partition(array, low, high) {
  let p = high; // partition index is the last
  let firstHigh = low;

  for (let i = low; i < high; i++) {
    if(array[i] < array[p]) {
      swap(array, i, firstHigh);
      ++firstHigh;
    }
  }

  swap(array, p, firstHigh);

  return firstHigh;
}

export default quickSort;