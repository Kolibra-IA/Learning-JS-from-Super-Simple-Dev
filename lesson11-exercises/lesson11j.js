function addArrays(array1, array2) {
  let newArray = [];

  for (i = 0; i < array1.length; i++) {
    newArray.push(array1[i] + array2[i]);
  }
  return newArray;
}

console.log(addArrays([1, 2, 3, 4], [1, 2, 3, 4]));
