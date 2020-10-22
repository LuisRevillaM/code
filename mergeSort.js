export default function mergeSort(array) {
  return mergeSortHelper(array, 0, array.length - 1);
}

function mergeSortHelper(array, start, end) {
  let middle;

  if (start < end) {
    middle = Math.floor((start + end)/2);

    mergeSortHelper(array, start, middle);
    mergeSortHelper(array, middle + 1, end);
    merge(array, start, middle, end);
  }

  return array;
}

function merge(array, start, middle, end) {
  let i;

  const buffer1 = []
  const buffer2 = []

  for (i = start; i <= middle; i++) {
    buffer1.push(array[i]);
  }

  for (i = middle + 1; i <= end; i++) {
    buffer2.push(array[i]);
  }

  i = start;

  while(!(buffer1.length === 0 || buffer2.length === 0)) {
    if (buffer1[0] <= buffer2[0]) {
      array[i] = buffer1.splice(0,1)[0];
      i++;
    } else {
      array[i] = buffer2.splice(0,1)[0];
      i++;
    }
  }

  while (!(buffer1.length === 0)) {
    array[i] = buffer1.splice(0,1)[0];
    i++;
  }
  while (!(buffer2.length === 0)) {
    array[i] = buffer2.splice(0,1)[0];
    i++;
  }
}