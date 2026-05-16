function addNum(array, num) {
  return array.map((value, index) => {
    return value + num;
  });
}

console.log(addNum([2, 3, 4, 5, 6], 3));
