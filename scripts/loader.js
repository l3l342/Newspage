var myVar;

function loader() {
  myVar = setTimeout(showPage, 2500);
  sessionStorage.setItem("loader_bool", 1);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("all").style.display = "block";
}

const currentbool = sessionStorage.getItem("loader_bool");
if ( currentbool == 1 ) {
  showPage();
  element = document.getElementsByClassName("all")
  element[0].style.webkitAnimationName = "none";
}