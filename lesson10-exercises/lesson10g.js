document.querySelector(".gaming").addEventListener("click", function () {
  if (
    !document.querySelector(".music").classList.contains("is-toggled") &&
    !document.querySelector(".tech").classList.contains("is-toggled")
  ) {
    if (document.querySelector(".gaming").classList.contains("is-toggled")) {
      document.querySelector(".gaming").classList.remove("is-toggled");
    } else {
      document.querySelector(".gaming").classList.add("is-toggled");
    }
  }
});

document.querySelector(".music").addEventListener("click", function () {
  if (
    !document.querySelector(".gaming").classList.contains("is-toggled") &&
    !document.querySelector(".tech").classList.contains("is-toggled")
  ) {
    if (document.querySelector(".music").classList.contains("is-toggled")) {
      document.querySelector(".music").classList.remove("is-toggled");
    } else {
      document.querySelector(".music").classList.add("is-toggled");
    }
  }
});

document.querySelector(".tech").addEventListener("click", function () {
  if (
    !document.querySelector(".gaming").classList.contains("is-toggled") &&
    !document.querySelector(".music").classList.contains("is-toggled")
  ) {
    if (document.querySelector(".tech").classList.contains("is-toggled")) {
      document.querySelector(".tech").classList.remove("is-toggled");
    } else {
      document.querySelector(".tech").classList.add("is-toggled");
    }
  }
});
