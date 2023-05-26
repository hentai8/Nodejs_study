function findDifferentElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const differentElements = [];

  for (const element of set1) {
    if (!set2.has(element)) {
      differentElements.push(element);
    }
  }

  return differentElements;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 4, 5, 6];

const differentElements = findDifferentElements(arr1, arr2);

console.log(differentElements); // [1]
