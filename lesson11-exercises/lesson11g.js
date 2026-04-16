let newArray = [];

function createNewArray(x) {
  for (i = 0; i < x.length; i++) {
    newArray.push(x[i] + 1);
  }
  return newArray;
}

console.log(createNewArray([1, 2, 3, 4, 5, 6]));
