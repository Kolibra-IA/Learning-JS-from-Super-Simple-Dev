let count = 0;

for (i = 0; i <= 1000000; i++) {
  if (i % 2 === 0 && i != 0) {
    count++;
  }
}

console.log(count);
