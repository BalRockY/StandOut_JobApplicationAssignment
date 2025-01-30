document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mobileMenu = document.querySelector(".mobile-menu");
  console.log("Menu element found:", mobileMenu); // Check if it logs the UL element

  if (hamburgerIcon && mobileMenu) {
    hamburgerIcon.addEventListener("click", function () {
      mobileMenu.classList.toggle("open");
      console.log("Menu open:", mobileMenu); // Check if it logs the UL element
      console.log("run toggle function");
    });
  }
});
