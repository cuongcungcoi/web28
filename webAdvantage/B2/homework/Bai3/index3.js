// Cho mảng chứa danh sách các loại quả
const fruitList = [
  "apple",
  "banana",
  "tomato",
  "watermelon",
  "strawberry",
  "cherry",
  "coconut",
];

// Tạo 1 thẻ <li> tương ứng với mỗi loại quả, hiển thị danh sách vào <ul>
let newList = fruitList.map(function (value) {
  return `<li>${value}</li>`;
});

newList = newList.join("");

document.querySelector("ul").innerHTML = newList;
