var _ = require('lodash');

console.log(_);
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// First page load gradient
window.onload = function () {
  setGradient();
};

// Random Button
var randomBtn = document.querySelector("#random");

function random() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function randomColor() {
  color1.value = "#" + random();
  color2.value = "#" + random();
  setGradient();
}
randomBtn.addEventListener("click", randomColor);

// Copy Button
var copyBtn = document.querySelector("#copy");
var copyText = document.querySelector("h3");

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(copyText.textContent);
});
