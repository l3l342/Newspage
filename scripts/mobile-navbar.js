function open_nav() {
    const nav = document.getElementById("mobile-nav");

    if (nav.style.display == "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}