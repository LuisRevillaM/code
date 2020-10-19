function heapElementParentIndex(key:number) {
	if (key === 0) return -1;
	
	return Math.floor((key - 1)/2);
}

function heapElementFirstChildIndex(key:number) {
	return key * 2 + 1;
}

function insertInHeap(array:number[], element:number, heapType:heapType) {
  const key = array.length;
	array[key] = element;
	bubbleUp(array, key, heapType);
}

type heapType = "min" | "max";

function isParentDominant(parent:number, child:number, heapType:heapType) {
  if (heapType == "min") {
    return parent < child;
  } else if (heapType == "max") {
    return parent > child;
  }
} 

function bubbleUp(array:number[], key:number, heapType:heapType) {
  const parentKey = heapElementParentIndex(key);
	if (parentKey == -1) return;

  if (!isParentDominant(array[parentKey], array[key], heapType)) {
    swap(array, key, parentKey);
    bubbleUp(array, parentKey, heapType);
  }
}

function swap(array:number[], key1:number, key2:number) {
  const el1 = array[key1];
  const el2 = array[key2];

  array[key2] = el1;
  array[key1] = el2;
}

function initHeap() {
  return [];
}

export const makeHeapOutOfArray = (inputArray:number[], heapType:heapType) => {
  const heap = initHeap();

  for (const element of inputArray) {
    insertInHeap(heap, element, heapType);
  }

  return heap;
}

export const extractTop = (priorityQ:number[], heapType:heapType) => {
  if (priorityQ[priorityQ.length] <= 0) return;

  const topElement = priorityQ[0];

  const lastKey = priorityQ.length - 1;

  priorityQ[0] = priorityQ[lastKey];

  priorityQ.splice(lastKey, 1);

  bubbleDown(priorityQ, 0, heapType);

  return topElement;
}

function bubbleDown(priorityQ:number[], key:number, heapType:heapType) {
 
  const firstChildIndex = heapElementFirstChildIndex(key);
  let nodeDominantElementIndex = key;
  
  for (let i = 0; i <=1; i++) {
    if (firstChildIndex + i <= priorityQ.length - 1) {
      if (!isParentDominant(priorityQ[nodeDominantElementIndex], priorityQ[firstChildIndex + i], heapType)) {
        nodeDominantElementIndex = firstChildIndex + i;
      }
    }
    if (nodeDominantElementIndex !== key) {
      swap(priorityQ, nodeDominantElementIndex, key);
      bubbleDown(priorityQ, nodeDominantElementIndex, heapType);
    }
  }
}

