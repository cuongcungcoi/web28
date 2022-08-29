let counter = parseInt(document.getElementById("counter").textContent);
document.querySelector(".prevBtn").addEventListener("click", function () {
  document.getElementById("counter").textContent = counter - 1;
  counter -= 1;
  if (counter < 0) {
    document.getElementById("counter").style.color = "red";
  }
  if (counter == 0) {
    document.getElementById("counter").style.color = "#333333";
  }
});

document.querySelector(".nextBtn").addEventListener("click", function () {
  document.getElementById("counter").textContent = counter + 1;
  counter += 1;
  if (counter > 0) {
    document.getElementById("counter").style.color = "green";
  }
  if (counter == 0) {
    document.getElementById("counter").style.color = "#333333";
  }
});
