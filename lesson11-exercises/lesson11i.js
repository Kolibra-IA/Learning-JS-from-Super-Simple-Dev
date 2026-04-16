function addNum(array, num) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(array[i] + num);
  }

  return newArray;
}

console.log(addNum([2, 3, 4, 5, 6], 5));
