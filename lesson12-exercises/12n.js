function removeEgg(food) {
  let filteredFood = food.filter((value, index) => {
    return value !== "egg";
  });

  return filteredFood;
}

console.log(removeEgg(["egg", "apple", "egg", "juice"]));
