document.querySelector("button").addEventListener("click", () => {
  setTimeout(
    () => (document.querySelector("button").textContent = "Finished"),
    1000,
  );
});
