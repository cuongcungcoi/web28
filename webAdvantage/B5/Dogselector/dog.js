"use strict";
const DOG_URL = "https://dog.ceo/api/breeds/list/all";
const SUB_DOG_URL = "https://dog.ceo/api/breed/hound/list";
const IMG = "https://dog.ceo/api/breed/hound/afghan/images";

let dogArea = document.getElementById("dog");
let subDogArea = document.querySelector(".list-sub-dog");
let subDogList = document.querySelector(".dog");
let imgArea = document.querySelector(".img-area");
async function getDog() {
  try {
    let data = await axios.get(DOG_URL);

    const listDog = Object.keys(data.data.message);
    renderDog(listDog);
    const subDog = data.data.message;
    subDogList.addEventListener("click", () => {
      let index = dogArea.value;
      renderSubDog(subDog[index]);
    });
  } catch (e) {
    console.log(e);
  }
}
async function getImg() {
  let index = dogArea.value;
  let linkImg = await axios.get(
    `https://dog.ceo/api/breed/${index}/images/random`
  );
  let link = linkImg.data.message;
  console.log(link);
  createImg(link);
}

function createImg(link) {
  let img = document.createElement("img");
  img.src = link;
  imgArea.appendChild(img);
}
function renderDog(arr) {
  dogArea.innerHTML = arr
    .map((dog) => `<option value="${dog}" class="dog-type">${dog}</option>`)
    .join("");
}
function renderSubDog(arr) {
  if (arr.length == 0) {
    subDogArea.innerHTML = `<li >No Sub Breed </li>`;
  } else {
    subDogArea.innerHTML = arr
      .map(
        (dog) =>
          `<li class="sub-dog-${dog}"><a onclick ="getImg()">${dog}</a></li>`
      )
      .join("");
  }
}
getDog();
