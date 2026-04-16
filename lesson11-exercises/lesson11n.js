function countWords(x) {
  let returnedObj = {};

  for (i = 0; i < x.length; i++) {
    if (!returnedObj[x[i]]) {
      returnedObj[x[i]] = 1;
    } else if (returnedObj[x[i]]) {
      returnedObj[x[i]]++;
    }
  }

  return returnedObj;
}

console.log(
  countWords([
    "education",
    "economy",
    "waitress",
    "movement",
    "agree",
    "crypto",
    "agree",
    "education",
    "agree",
    "economy",
  ]),
);
