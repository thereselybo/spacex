const loadingWrapper = document.querySelector(".loading-wrapper");
const loader = document.querySelector(".loader");

window.addEventListener("load", function () {
  setTimeout(fadeLoader, 1000);
  setTimeout(removeLoader, 1200);
});

function fadeLoader() {
  loadingWrapper.style.opacity = 0;
  loadingWrapper.style.transition = "all ease-in .2s";

  loader.style.opacity = 0;
  loader.style.transition = "all ease-in .2s";
}

function removeLoader() {
  loadingWrapper.style.display = "none";
  loader.style.display = "none";
}
