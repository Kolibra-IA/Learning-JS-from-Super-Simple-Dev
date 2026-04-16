function minMax(x) {
  let minMaxObj = { min: x[0], max: x[0] };

  for (i = 0; i < x.length; i++) {
    if (x[i] < minMaxObj.min) {
      minMaxObj.min = x[i];
    } else if (x[i] > minMaxObj.max) {
      minMaxObj.max = x[i];
    }
  }

  return minMaxObj;
}

console.log(minMax([0, 9, 4, 5, 8, 2, 19, -4]));
