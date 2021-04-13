//button auswählen (class)
const btn = document.querySelector(".btn-toggle");
// stylesheet link (class)
const theme = document.querySelector(".theme-link");

// listen für das click element
btn.addEventListener("click", function() {
  // wenn die momentane url style/style.css ist
  if (theme.getAttribute("href") == "/style/style.css") {
    // ... dann zu darkmode switchen
    theme.href = "/style/style_dark.css";
  // Anderer fall
  } else {
    // ... switch zu lightmode
    theme.href = "/style/style.css";
  }
});
