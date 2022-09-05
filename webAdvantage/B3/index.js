let form = document.querySelector("form");
let amount = document.getElementById("bill");
let guest = document.getElementById("guest");
let quanlity = document.getElementById("quanlity");
let tip = document.querySelector(".tip");
form.onsubmit = function (e) {
  e.preventDefault();

  tip.textContent = (amount.value * quanlity.value) / guest.value;
};
