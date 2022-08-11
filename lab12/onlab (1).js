/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */
function printOddNumbers() {}

/**
 * In dãy số chẵn trong khoảng từ 1 đến 100
 */
function printEvenNumbers() {}

/**
 * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
 ** @param {number} n Số nguyên dương bất kỳ
 */
function sumOfNumbers(n) {
  let S = 0;
  for (let i = 1; i <= n; i++) {
    S = S + i;
  }
  return S;
}
console.log(sumOfNumbers(3));
/**
 * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
 *
 * @returns {number} Tổng các số lẻ
 */
function sumOfOddNumbers(start, end) {}

/**
 * Tìm các ước số của một số bất kỳ
 *
 * @param {number} number Số nguyên dương bất kỳ
 *
 * @returns {number[]} Mảng chứa các ước số *[v1, v2, ...]*
 */
function divisor(number) {}

/**
 * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
 *
 * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
 *
 * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
 */
function countFolding(thickness) {
  let number = 0.1;
  thickness *= 1000;
  let x = 0;
  while (number < thickness) {
    number = number * 2;
    x++;
  }
  return x;
}
console.log(countFolding(3));

/**
 * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
 *
 * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
 *
 * @param {number} dad Tuổi của cha
 * @param {number} son Tuổi của con
 *
 * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
 */
function countYears(dad, son) {
  let x = 0;
  while (dad != 2 * son) {
    dad += 1;
    son += 1;
    x++;
  }
  return [dad, son, x];
}
console.log(countYears(24, 1));

/**
 * Tìm số chân gà và chó trong bài toán
 *
 * Vừa gà vừa chó
 * Bó lại cho tròn
 * Ba mươi sáu con
 * Một trăm chân chẵn
 */
function countLegs(x) {
  while (2 * x + (36 - x) * 4 != 100) {
    x++;
  }
  return [2 * x, 4 * (36 - x)];
}
console.log(countLegs(0));
