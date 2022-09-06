"use strict";
function randomId() {
  return Math.floor(Math.random() * 100000);
}

let products = [
  {
    id: randomId(),
    name: "TISSOT PRX POWERMATIC 80",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.",
    price: 250000,
    image:
      "https://www.tissotwatches.com/media/catalog/product/T/1/T137.407.16.041.00_R_1.png?im=Resize=(387,387)",
    count: 1,
  },
  {
    id: randomId(),
    name: "TISSOT T-TOUCH CONNECT SOLAR",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.",
    price: 350000,
    image:
      "https://www.tissotwatches.com/media/catalog/product/T/1/T137.407.11.041.00_R_1.png?im=Resize=(387,387)",
    count: 1,
  },
];
let productsEle = document.querySelector(".products");
function convertMoney(num) {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}
// Remove item trong cart
function removeItem(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products.splice(i, 1);
    }
  }
  renderUI(products);
}
// Thay đổi số lượng sản phẩm
function changeTotalProduct(id, e) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products[i].count = Number(e.target.value);
    }
  }
  renderUI(products);
}
// Danh sách promotion code (Mã giảm giá)
let promotionCode = {
  A: 10,
  B: 20,
  C: 30,
  D: 40,
};

// Kiểm tra mã giảm giá
let inputPromotion = document.querySelector("#promo-code");

function checkPromotion() {
  let value = inputPromotion.value;
  if (promotionCode[value]) {
    return promotionCode[value];
  }
  return 0;
}

// Truy cập vào các thành phần
let subTotalEl = document.querySelector(".subtotal span");
let vatEl = document.querySelector(".vat span");
let totalEle = document.querySelector(".total span");
let discount = document.querySelector(".discount");
let discountEle = document.querySelector(".discount span");

// Cập nhật tổng tiền
function updateTotalMoney(arr) {
  // Tính tổng tiền cart
  let totalMoney = 0;
  let discountMoney = 0;
  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    totalMoney += p.count * p.price;
  }
  let data = checkPromotion();

  if (data) {
    discountMoney = (totalMoney * data) / 100;
    discount.classList.remove("hide");
  } else {
    discount.classList.add("hide");
  }

  // Cập nhật tiền lên trên giao diện
  subTotalEl.innerText = convertMoney(totalMoney);
  vatEl.innerText = convertMoney(totalMoney * 0.05);
  discountEle.innerText = convertMoney(discountMoney);
  totalEle.innerText = convertMoney(totalMoney * 1.05 - discountMoney);
}

function renderUI(arr) {
  let countEle = document.querySelector(".count");
  countEle.innerText = `${updateTotalItem(arr)} items in the bag`;

  updateTotalMoney(arr);

  productsEle.innerHTML = "";
  if (arr.length == 0) {
    productsEle.insertAdjacentHTML(
      "afterbegin",
      "<li>Không có sản phẩm nào trong giỏ hàng</li>"
    );
    document.querySelector(".option-container").style.display = "none";
    return;
  } else {
    for (let i = 0; i < arr.length; i++) {
      const p = arr[i];
      productsEle.innerHTML += `
            <li class="row">
                <div class="col left">
                    <div class="thumbnail">
                        <a href="#">
                            <img src="${p.image}" alt="${p.name}">
                        </a>
                    </div>
                    <div class="detail">
                        <div class="name"><a href="#">${p.name}</a></div>
                        <div class="description">
                            ${p.description}
                        </div>
                        <div class="price">${convertMoney(p.price)}</div>
                    </div>
                </div>
                <div class="col right">
                    <div class="quantity">
                        <input 
                        type="number" 
                        class="quantity" 
                        step="1" 
                        value="${p.count}" 
                        onchange="changeTotalProduct(${p.id}, event)">
                    </div>
                    <div class="remove" onclick="removeItem(${p.id})">
                        <span class="close">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </li>
        `;
    }
  }
}
window.onload = renderUI(products);
// Cập nhật số lượng sản phẩm
function updateTotalItem(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    total += p.count;
  }
  return total;
}

let btnPromotion = document.querySelector(".promotion button");

btnPromotion.addEventListener("click", function () {
  updateTotalMoney(products);
});
