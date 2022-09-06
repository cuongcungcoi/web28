"use strict";
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
  console.log(selectorRules);
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

Validator.minLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : `Mật khẩu cần có ít nhất ${min} ký tự`;
    },
  };
};
Validator.minLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : `Mật khẩu cần có ít nhất ${min} ký tự`;
    },
  };
};
Validator.isConfirm = function (selector, getValuePassWord, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getValuePassWord()
        ? undefined
        : message || "Giá trị nhập vào không chính xác";
    },
  };
};

let submit = document.querySelector(".submit-form");
submit.onclick = function (e) {
  e.preventDefault();
};
