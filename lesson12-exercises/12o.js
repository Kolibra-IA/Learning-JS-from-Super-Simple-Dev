function removeEgg(food) {
  let count = 0;

  let filteredFood = food.filter((value, index) => {
    if (count >= 2) {
      return true;
    } else if (value === "egg") {
      count++;
      return false;
    } else {
      return true;
    }
  });

  return filteredFood;
}

console.log(removeEgg(["egg", "apple", "egg", "juice", "egg", "banana"]));
