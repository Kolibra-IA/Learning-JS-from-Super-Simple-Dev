let count = 0;

function findItem(x, y) {
  for (i = 0; i < x.length; i++) {
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
