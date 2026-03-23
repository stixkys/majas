const maja = document.querySelector(".majas");
const jumts = document.querySelector(".jumts");
const logs = document.querySelector(".logs");
const durvis = document.querySelector(".durvis");
const rokturis = document.querySelector(".rokturis");

function atvertSaiti() {
    window.open("https://lv.wikipedia.org/wiki/M%C4%81ja", "_blank");
}

function atvertotroSaiti() {
    window.open("https://lv.wikipedia.org/wiki/Jumts", "_blank");
}

function atverttresoSaiti() {
    window.open("https://lv.wikipedia.org/wiki/Logs", "_blank");
}

function atvertceturtoSaiti() {
    window.open("https://lv.wikipedia.org/wiki/Durvis", "_blank");
}

function atvertpiektoSaiti() {
    window.open("https://en.wikipedia.org/wiki/Door_handle", "_blank");
}

maja.addEventListener("click", atvertSaiti);
jumts.addEventListener("click", atvertotroSaiti);
logs.addEventListener("click", atverttresoSaiti);
durvis.addEventListener("click", atvertceturtoSaiti);
rokturis.addEventListener("click", atvertpiektoSaiti);