/**
 * Trả về chuỗi đại diện cho ngày hôm nay theo định dạng VN
 *
 * Ví dụ: 01/10/2022 (lưu ý, ngày tháng đầy đủ 2 chữ số)
 *
 * @returns {string} Chuỗi ngày tháng
 */
function currentDate() {
  let d = new Date();
  date = d.getDate() < 9 ? "0" + d.getDate() : d.getDate();
  month = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;

  return date + "/" + month + "/" + d.getFullYear();
}
console.log(currentDate());

/**
 * Trả về chuỗi đại diện cho thời gian hiện tại
 *
 * Ví dụ: 10:30:59 (lưu ý, giờ, phút, giây đầy đủ 2 chữ số)
 *
 * @returns {string} Chuỗi thời gian
 */
function currentTime() {
  let d = new Date();
  hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
  minute = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
  second = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();

  return hours + ":" + minute + ":" + second;
}
console.log(currentTime());

/**
 * Tìm thứ trong tuần tương ứng với ngày hiện tại
 *
 * Ví dụ: T2, T3, ..., CN
 *
 * @returns {string} Thứ tương ứng
 */
function todayWeekday() {
  let d = new Date();
  let A = ["Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
  index = d.getDay();
  return A[index];
}
console.log(todayWeekday());

/**
 * Tìm ngày cuối cùng của tháng
 *
 * @param {Date} date - Ngày bất kỳ
 *
 * @returns {Date} Ngày cuối tháng
 */
function isLeafYear(year) {
  return (
    (year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)
  );
}
let date2 = new Date();
function getLastDayOfMonth(date2) {
  let m = date2.getMonth() + 1;
  y = date2.getFullYear();
  switch (m) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      date2.setDate(31);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      date2.setDate(30);
      break;
    case 2:
      if (isLeafYear(y)) {
        date2.setDate(29);
      } else date2.setDate(28);
      break;
  }
  return date2;
}
/**
 * Tính số ngày đến tết dương lịch năm sau
 *
 * @returns {number} Số ngày cho đến tết dương lịch năm sau
 */
function getDaysToNextYear() {
  let date = new Date();
  m = date.getMonth();
  y = date.getFullYear();
  S2 = 0;
  S = 0;
  day = date.getDate();
  let A = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 0; i < m; i++) {
    S += A[i];
  }
  S2 = S + day;
  if (isLeafYear(y)) {
    return 366 - S2;
  } else return 365 - S2;
}

console.log(getDaysToNextYear());

/**
 * Tính số ngày cho đến sinh nhật tiếp theo
 *
 * @param {number} month Tháng sinh
 * @param {number} day Ngày sinh
 *
 * @return {number} Số ngày cho đến sinh nhật tiếp theo
 */
function getDaysToNextBirthday(month, day) {
  let date = new Date();
  m = date.getMonth();
  y = date.getFullYear();
  A1 = 0;
  B1 = 0;
  dayNow = date.getDate();
  let A = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (m < month - 1) {
    for (let i = m; i < month - 1; i++) {
      A1 = A1 + A[i];
    }
    return day + A1 - dayNow;
  }

  if (m > month - 1) {
    for (let i = 0; i < month - 1; i++) {
      B1 += A[i];
    }
    B1 = B1 + day;
    for (let i = m; i <= 11; i++) {
      B1 = B1 + A[i];
    }
    return B1 - dayNow;
  }

  if ((m = month - 1)) {
    if (day > dayNow) {
      return day - dayNow;
    } else return 365 + day - dayNow;
  }
}
console.log(getDaysToNextBirthday(11, 20));

/**
 * @typedef {Object} user
 * @property {string} fullname - Họ tên
 * @property {string} dateOfBirth - Ngày sinh
 */

/**
 * Kiểm tra xem ai có sinh nhật vào hôm nay
 *
 * @param {user[]} users Danh sách người dùng
 *
 * @return {user[]} Danh sách người có sinh nhật vào hôm nay
 */
let users = [
  {
    fullname: "Hoàng Cường",
    dateOfBirth: "21/08",
  },
  {
    fullname: "Tuấn Minh",
    dateOfBirth: "19/06",
  },
  {
    fullname: "Hoài Nam",
    dateOfBirth: "21/09",
  },
  {
    fullname: "Duy Nguyên",
    dateOfBirth: "13/10",
  },
];
function todayBirthday(users) {
  let d = new Date();
  day = d.getDate() < 9 ? "0" + d.getDate() : d.getDate();
  month = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
  value = day + "/" + month;
  A = users.filter((user) => user.dateOfBirth === value);
  return A;
}
console.log(todayBirthday(users));
