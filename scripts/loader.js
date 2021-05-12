var myVar;

function loader() {
  myVar = setTimeout(showPage, 2500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("all").style.display = "block";
}