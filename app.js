let backBtn = document.getElementById("backBtn");

function openingNav() {
    document.getElementById('navbar').style.width = "300px";
}

function closingNav() {
    document.getElementById('navbar').style.width = "0%";
    document.getElementsByClassName('nav-link').style.display = none;
}