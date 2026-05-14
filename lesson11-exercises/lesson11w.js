let count = 0;

function findItem(x, y) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] === y) {
      count++;
      console.log(i);
      break;
    }
  }
  if (count > 0) {
    return;
  } else {
    console.log(-1);
  }
}

findItem(["education", "search", "element", "item", "search"], "search");

function unique(theArray) {
  let newArray = [];
  for (let i = 0; i < theArray.length; i++) {
    if (newArray.indexOf(theArray[i]) === -1) {
      newArray.push(theArray[i]);
    }
  }
  console.log(newArray);
}

unique([
  "statistics",
  "education",
  "agriculture",
  "economics",
  "mathematics",
  "movement",
  "education",
  "education",
]);
