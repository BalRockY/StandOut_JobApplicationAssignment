document.addEventListener("DOMContentLoaded", function () {
  // locate elements
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mobileMenu = document.querySelector(".mobile-menu");

  let isClickable = true; // buttonclick enabled

  if (hamburgerIcon && mobileMenu) {
    // if elements are located, add event listener in the form of a click function
    hamburgerIcon.addEventListener("click", function () {
      if (isClickable) {
        // toggle menu class name to add or remove the classname "open", toggling the mobile-menu
        mobileMenu.classList.toggle("open");
        isClickable = false; // buttonclick temporarily disabled, since fast clicking would prevent toggling in some cases.
        setTimeout(function () {
          isClickable = true; // reenable buttonclick after a delay
        }, 100); // delay-time. Set as needed
      }
    });
  }
});
