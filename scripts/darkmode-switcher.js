// Select the button
const btn = document.querySelector(".btn-toggle");
const theme1 = document.querySelector(".theme-link");


btn.addEventListener("click", function() {
  // wenn die momentane url style/style.css ist
  if (theme1.getAttribute("href") == "/style/style.css") {
    // ...but use .dark-mode if the .light-mode class is already on the body,
    var theme = "dark";
    location.reload();
  } else {
    // ... switch zu lightmode
    theme1.href = "/style/style.css";
    var theme = "light";
    location.reload();
  }
  // Finally, let's save the current preference to localStorage to keep using it
  localStorage.setItem("theme", theme);
});

// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem("theme");
// If the user's preference in localStorage is dark...
if (currentTheme == "dark") {
  // ...let's toggle the .dark-theme class on the body
  theme1.href = "/style/style_dark.css";
// Otherwise, if the user's preference in localStorage is light...
} else if (currentTheme == "light") {
  // ...let's toggle the .light-theme class on the body
  theme1.href = "/style/style.css";
}