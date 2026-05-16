function countPositive(nums) {
  let newArray;

  newArray = nums.filter((value, index) => {
    return value >= 0;
  });

  return newArray.length;
}

console.log(countPositive([1, -1, 3, -2, 4, 5]));
