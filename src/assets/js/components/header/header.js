document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon-img");
  const mobileNavigation = document.querySelector(".mobile-navigation");

  menuIcon.addEventListener("click", function () {
    if (mobileNavigation.style.left === "-200px") {
      mobileNavigation.style.left = "0";
    } else {
      mobileNavigation.style.left = "-200px";
    }
  });
});
