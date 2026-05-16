let timeoutID;

document.querySelector("button").addEventListener("click", () => {
  document.querySelector("p").textContent = "Added";
  if (timeoutID) {
    clearTimeout(timeoutID);
  }
  timeoutID = setTimeout(() => {
    document.querySelector("p").textContent = "";
    timeoutID = "";
  }, 10000);
});
