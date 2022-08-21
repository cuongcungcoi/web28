/**
 * Chuyển đổi chuỗi thành dạng capitalize (chỉ viết hoa chữ cái đầu tiên)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `capitalize("  javascript is Fun ") => "Javascript is fun"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu
 */
function capitalize(str) {
  str = str.trim();
  str1 = str.split("");
  for (let key in str1) {
    str1[key] = str1[key].toLowerCase();
  }
  str1[0] = str1[0].toUpperCase();
  return str1.join("");
}
let str = "                   Viet naM vo dOi";
console.log(capitalize(str));

/**
 * Chuyển đổi chuỗi thành dạng title (viết hoa chữ cái đầu của mỗi từ)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `title("javaScript iS fUn") => "Javascript Is Fun"`
 *
 * @param {string} str2 Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu mỗi từ
 */
function title(str2) {
  str2 = str2.trim();
  str3 = str2.split(" ");
  for (let key in str3) {
    str3[key] = capitalize(str3[key]);
  }
  return str3.join(" ");
}
console.log(title("          javaScript iS fUn"));

/**
 * Đếm số ký tự nguyên âm xuất hiện trong chuỗi
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {number} Số ký tự nguyên âm có trong chuỗi
 */
function countVowel(str) {
  let A = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  i = 0;
  strNew = str.split("");
  for (const value of A) {
    for (const value2 of strNew) {
      if (value2 == value) {
        i++;
      }
    }
  }
  return i;
}

/**
 * Tạo một mã màu ngẫu nhiên (hệ màu HEX)
 *
 * @return {string} Màu ngẫu nhiên
 */
function randomColor() {
  b = Math.floor(Math.random() * 16 ** 6);
  return "#" + b.toString(16);
}
console.log(randomColor());

/**
 * Đảo ngược thứ tự các từ trong chuỗi
 *
 * Ví dụ: `reverseWords("The fox is comming for the chicken") => "chicken the for comming is fox The"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi đảo ngược
 */
function reverseWords(str) {
  str = str.split(" ");
  str = str.reverse();
  str = str.join(" ");
  return str;
}
console.log(reverseWords("The fox is comming for the chicken"));

/**
 * Tạo chuỗi URL (viết thường, các từ được nối với nhau bằng dấu -)
 *
 * Ví dụ: `parameterize("JavaScript is fun") => "javascript-is-fun"`
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi URL
 */
function parameterize(str) {
  str = str.trim();
  str = str.split(" ");
  for (let key in str) {
    str[key] = str[key].toLowerCase();
  }

  return str.join("-");
}
console.log(parameterize("     Viet Nam Vo Doi"));

let n = 15;
n = n.toString(16);
console.log(n);
