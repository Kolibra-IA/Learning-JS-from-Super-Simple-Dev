export function isWeekend(x) {
  const y = x.format("dddd");
  if (y === "Saturday" || y === "Sunday") {
    document.querySelector("body").innerHTML =
      `<h1> Exercise 15f</h1><p>It's ${y}, baby!</p>`;
    return;
  }
  document.querySelector("body").innerHTML =
    `<h1> Exercise 15f</h1><p>No luck!</p>`;
  return;
}
