function checkOrientation() {
  const horizontalImage = document.getElementById("horizontal-bg");
  const verticalImage = document.getElementById("vertical-bg");

  if (window.matchMedia("(orientation: portrait)").matches) {
    horizontalImage.style.display = "block";
    verticalImage.style.display = "none";
  } else {
    horizontalImage.style.display = "none";
    verticalImage.style.display = "block";
  }
}

// Listen for orientation change events
window.addEventListener("orientationchange", checkOrientation, false);

$("a.nav-link").click(function () {
  const dropdown = document.getElementById("navbarNav");
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  }
});
