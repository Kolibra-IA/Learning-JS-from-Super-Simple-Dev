function arraySwap(x) {
  const a = x[0];
  const b = x[x.length - 1];

  x.shift();
  x.unshift(b);
  x.pop();
  x.push(a);

  return x;
}

console.log(arraySwap([2, 8, 9, 7, 5, 6]));
