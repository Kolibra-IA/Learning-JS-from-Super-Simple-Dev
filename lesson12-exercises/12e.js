document.querySelector("button").addEventListener("click", () => {
  document.querySelector("p").textContent = "Added";
  setTimeout(() => {
    document.querySelector("p").textContent = "";
  }, 2000);
});
