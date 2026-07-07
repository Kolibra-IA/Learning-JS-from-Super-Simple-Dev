import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

document.querySelector("body").innerHTML =
  `<p>${dayjs().add(5, "day").format("MMMM D")}</p>`;
