"use strict";
$("body").append('<div class ="heading"></div>');
$("<h1>Thêm Mới Học Viên</h1>").appendTo($(".heading"));
$("<form></form>").appendTo($("body"));
$("form").attr("id", "form-1");
$("form").append($("<div></div>"));
$("form div").attr("class", "form-item-1");
$(".form-item-1").append($("<label/>"));
$("label").attr({
  for: "fullname",
});
$("label").text("Họ tên");

$(".form-item-1").append($("<input/>"));
$("input").attr({
  type: "text",
  name: "fullname",
  id: "fullname",
});
$(".form-item-1").append($('<div class="message"></div>'));

$("form").append($("<div class ='form-item-2'></div>"));
$(".form-item-2").append($("<label/>"));
$(".form-item-2 label").attr({
  for: "email",
});
$(".form-item-2 label").text("Email");

$(".form-item-2").append($("<input/>"));
$(".form-item-2 input").attr({
  type: "text",
  name: "email",
  id: "email",
});
$(".form-item-2").append($('<div class="message"></div>'));

$("form").append($("<div class ='form-item-3'></div>"));
$(".form-item-3").append($("<label/>"));
$(".form-item-3 label").attr({
  for: "dob",
});
$(".form-item-3 label").text("Ngày sinh");

$(".form-item-3").append($("<input/>"));
$(".form-item-3 input").attr({
  type: "text",
  name: "dob",
  id: "dob",
});
$(".form-item-3").append($('<div class="message"></div>'));

$("form").append($("<div class ='form-item-4'></div>"));
$(".form-item-4").append($("<label/>"));
$(".form-item-4 label").attr({
  for: "phone",
});
$(".form-item-4 label").text("Số điện thoại");

$(".form-item-4").append($("<input/>"));
$(".form-item-4 input").attr({
  type: "text",
  name: "phone",
  id: "phone",
});
$(".form-item-4").append($('<div class="message"></div>'));
$("form").append($("<div class ='option'></div>"));
$(".option").append("<div/>");
$(".option div").attr({
  class: "back",
});
$(".back").append($("<a/>"));
$("a").append(
  '<ion-icon name="chevron-back-outline"></ion-icon><span>Quay lại</span>'
);
$("a").attr({
  href: "index.html",
});
$("a").css({
  textDecoration: "none",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});
$(".back").css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: "gray",
  color: "white",
  width: "80px",
  height: "30px",
  borderRadius: "3px",
  cursor: "pointer",
});
$(".option").append($('<div class="save"></div>'));
$(".save").append(
  $(
    '<button type="submit"><ion-icon name="save-outline"></ion-icon><span>Lưu</span></button>'
  )
);
$(".save button").css({
  display: "flex",
  alignItems: "center",
  backgroundColor: "green",
  color: "white",
  width: "55px",
  height: "30px",
  borderRadius: "3px",
  justifyContent: "center",
  border: "none",
  cursor: "pointer",
});
$(".option").css({
  display: "flex",
  gap: "3px",
  paddingTop: "15px",
  justifyContent: "center",
});
$("input").css({
  width: "580px",
  height: "25px",
  borderRadius: "4px",
  paddingLeft: "10px",
  borderWidth: "0.02px",
});
$("form").css({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  width: "600px",
  padding: "5px",
  borderRadius: "5px",
  backgroundColor: "#f5f5f0",
  boxShadow: "1px 3px 2px #797877",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "5px",
  paddingTop: "20px",
  paddingBottom: "20px",
});
$(".message").css({
  color: "red",
});
$(".form-item-3").css({
  display: "flex",
  flexDirection: "column",

  marginTop: "15px",
});
$(".form-item-2").css({
  display: "flex",
  flexDirection: "column",
  marginTop: "15px",
});
$(".form-item-1").css({
  display: "flex",
  flexDirection: "column",
  marginTop: "15px",
});
$(".form-item-4").css({
  display: "flex",
  flexDirection: "column",
  marginTop: "15px",
});
$(".heading").css({
  textAlign: "center",
});

// Validate form

function Validator(options) {
  let selectorRules = {};
  //Hàm check fullname
  function validate(inputElement, rule) {
    let erroElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );
    let errorMessage;
    //Lấy ra mảng chứa các rule
    let rules = selectorRules[rule.selector];
    //Lặp qua từng rule và kiểm tra
    for (let i = 0; i <= rules.length; ++i) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) break;
    }

    if (errorMessage) {
      erroElement.innerText = errorMessage;
      inputElement.classList.add("red");
    } else {
      erroElement.innerText = "";
      inputElement.classList.remove("red");
    }
  }
  //Lấy element form
  let formElement = document.querySelector(options.form);

  if (formElement) {
    formElement.onsubmit = (e) => {
      e.preventDefault();

      options.rules.forEach((rule) => {
        let inputElement = formElement.querySelector(rule.selector);
        validate(inputElement, rule);
      });
    };
    options.rules.forEach((rule) => {
      //Lưu lại rules cho các input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else selectorRules[rule.selector] = [rule.test];
      let inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        //onblur khỏi trường điền
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        //Xử lý khi người dùng nhập vào input
        inputElement.oninput = function () {
          let erroElement = inputElement.parentElement.querySelector(
            options.errorSelector
          );
          erroElement.innerText = "";
          inputElement.classList.remove("red");
        };
      }
    });
  }
}
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};
Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || "Hãy nhập email của bạn";
    },
  };
};

// Validator.checkDob = function (selector) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return typeof value === "number"
//         ? undefined
//         : `Hãy nhập ngày sinh của bạn`;
//     },
//   };
// };
Validator.checkPhone = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length == 10
        ? undefined
        : message || `Vui lòng nhập trường này`;
    },
  };
};
$("<a/>").text = $(".back");
$("a").href = "index.html";
