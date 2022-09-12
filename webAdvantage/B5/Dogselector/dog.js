"use strict";
const DOG_URL = "https://dog.ceo/api/breeds/list/all";
const SUB_DOG_URL = "https://dog.ceo/api/breed/hound/list";
const IMG = "https://dog.ceo/api/breed/hound/afghan/images";

let dogArea = document.getElementById("dog");
let subDogArea = document.querySelector(".list-sub-dog");
let subDogList = document.querySelector(".dog");
// async function getDog() {
//   try {
//     let data = await axios.get(DOG_URL);

//     const listDog = Object.keys(data.data.message);
//     renderDog(listDog);
//     const subDog = data.data.message;
//     let index = dogArea.value;
//     console.log(index);
//     subDogList.addEventListener("click", () => renderSubDog(subDog[index]));
//   } catch (e) {
//     console.log(e);
//   }
// }
subDogList.onclick = () => {
  for (let i = 1; i < 10; i++) {
    console.log(i);
  }
};

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
      .map((dog) => `<li class="sub-dog-${dog}">${dog}</li>`)
      .join("");
  }
}
