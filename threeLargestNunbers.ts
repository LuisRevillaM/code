import { makeHeapOutOfArray, extractTop } from "./makeHeap";

function findThreeLargestNumbers(array) {
  const pq = makeHeapOutOfArray(array, "max");
	
	const largest1 = extractTop(pq, "max");
	const largest2 = extractTop(pq, "max"); 
	const largest3 = extractTop(pq, "max");
	
	return [largest3, largest2, largest1];
	
}

export  default findThreeLargestNumbers;
