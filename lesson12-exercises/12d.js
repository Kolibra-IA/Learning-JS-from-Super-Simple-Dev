document.querySelector("button").addEventListener("click", () => {
  document.querySelector("button").textContent = "Loading";
  setTimeout(() => {
    document.querySelector("button").textContent = "Finished";
  }, 1000);
});
