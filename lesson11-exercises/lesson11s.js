let count = 0;

function removeEgg(x) {
  for (i = 0; i < x.length; i++) {
    if (x[i] === "egg") {
      x.splice(i, 1);
      count++;
    }
    if (count === 2) {
      break;
    }
  }

  console.log(x);
  return;
}

removeEgg(["egg", "food", "alcohol", "bread", "egg", "milk", "egg"]);
