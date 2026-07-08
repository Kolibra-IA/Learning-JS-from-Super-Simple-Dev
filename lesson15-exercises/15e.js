import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

function isWeekend(x) {
  const y = x.format("dddd");
  if (y === "Saturday" || y === "Sunday") {
    document.querySelector("body").innerHTML = `<p>It's ${y}, baby!</p>`;
    return;
  }
  document.querySelector("body").innerHTML = `<p>No luck!</p>`;
  return;
}

isWeekend(dayjs().add(4, "days"));
