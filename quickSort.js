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

  // we partition by scanning linerly the array

  // we're trying to find every element that's smaller than the pivot

  // while also keeping track of where the pivot belongs. This is what we call "firstHigh" aka first element equal or greater than the pivot.

  // so how do we do it? for every element we check if the current element is smaller than the pivot

  // if true, we swap the current element and the firstHigh (biggest element of the smaller ones). It's like throwing the number on the top of the low bucket.

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