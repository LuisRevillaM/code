export function swap(array:number[], key1:number, key2:number) {
  if (key1 === key2) {
    return;
  }
  const el1 = array[key1];
  const el2 = array[key2];

  array[key2] = el1;
  array[key1] = el2;
}
