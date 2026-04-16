function countPositive(x) {
  let count = 0;
  for (i = 0; i < x.length; i++) {
    if (x[i] > 0) {
      count++;
    }
  }
  return count;
}

console.log(countPositive([1, 0, -2, -4, -5, 3, 4, 5, 6]));
console.log(countPositive([1, 0, -2, -4, -5, 3]));
console.log(countPositive([1, 0, -2, -4, -5, 3]));
console.log(countPositive([1, 0, -2, -4, -5, 3]));
console.log(countPositive([1, 0, -2, -4, -5, 3]));
