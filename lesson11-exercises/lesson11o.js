let count = 0;

function findItem(x) {
  for (i = 0; i < x.length; i++) {
    if (x[i] === "search") {
      count++;
      console.log(i);
    }
  }
  if (count > 0) {
    return;
  } else {
    console.log(-1);
  }
}

findItem(["education", "search", "element", "item", "search"]);
