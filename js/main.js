function preloader() {
  let preloader = document.querySelector(".preloader");
  window.onload = function () {
      preloader.classList.add("preloader_loaded");
  };
}
preloader();

function menu() {
  let burgerMenu = document.querySelector(".menu");
  let menuInfo = document.querySelector(".info");

  burgerMenu.addEventListener("click", () => {
      menuInfo.classList.toggle("info_active");
      burgerMenu.classList.toggle("toggle");
  });
}
menu();

  

