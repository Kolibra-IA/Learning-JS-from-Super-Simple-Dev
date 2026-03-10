function toggledFunc(className) {
  const buttonSelection = document.querySelector(className);
  document.querySelector(className).addEventListener("click", function () {
    if (buttonSelection.classList.contains("is-toggled")) {
      buttonSelection.classList.remove("is-toggled");
    } else {
      buttonSelection.classList.add("is-toggled");
    }
  });
}

toggledFunc(".gaming");
toggledFunc(".music");
toggledFunc(".tech");
