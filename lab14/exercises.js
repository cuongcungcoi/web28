/**
 * Tìm số nhỏ nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Sổ nhỏ nhất trong mảng
 */
function min(arr) {
  let a = arr[0];
  for (let b = 0; b <= arr.length; b++) {
    if (a >= arr[b + 1]) {
      a = arr[b + 1];
    }
  }
  return a;
}

/**
 * Tìm số lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn nhất trong mảng
 */
function max(arr) {
  let a = arr[0];
  for (let b = 0; b <= arr.length; b++) {
    if (a <= arr[b + 1]) {
      a = arr[b + 1];
    }
  }
  return a;
}

/**
 * Tìm số nhỏ nhất và lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {[number, number]} Mảng chứa giá trị nhỏ nhất và lớn nhất
 */
function minMax(arr) {
  let x = arr[0];
  for (let b = 0; b <= arr.length; b++) {
    if (x >= arr[b + 1]) {
      x = arr[b + 1];
    }
  }
  let y = arr[0];
  for (let b = 0; b <= arr.length; b++) {
    if (y <= arr[b + 1]) {
      y = arr[b + 1];
    }
  }
  return [x, y];
}

/**
 * Đổi chỗ vị trí của 2 phần tử bất kỳ trong mảng (x và y)
 *
 * Lưu ý mảng sau khi gọi phải thay đổi
 *
 * @param {number[]} arr Mảng số bất kỳ
 * @param {number} x Index 1
 * @param {number} y Index 2
 */
function swap(arr, x, y) {
  let a = arr[x];
  arr[x] = arr[y];
  arr[y] = a;
  return arr;
}

/**
 * Tìm các số xuất hiện trong cả 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number[]} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số xuất hiện trong cả 2 mảng
 */
function intersection(arr1, arr2) {
  let arrDup = [];
  for (const a of arr1) {
    for (const b of arr2) {
      if (a == b) {
        arrDup = arrDup.concat(a);
      }
    }
  }
  let A = [];
  for (const key of arrDup) {
    if (!A.includes(key)) A.push(key);
  }
  return A;
}
arr1 = [4, 5, 3, 2, 4, 5, 6, 7, 9, 9, 65, 24, 21];
arr2 = [2, 19, 2, 4, 5, 6, 17, 10, 9, 65, 3, 7];
/**
 * Tìm các số riêng biệt chỉ xuất hiện ở 1 trong 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số chỉ xuất hiện ở 1 trong 2 mảng
 */
function difference(arr1, arr2) {
  let A = [];
  for (const key of arr1) {
    if (!arr2.includes(key) && arr1.includes(key)) A.push(key);
  }
  for (const key2 of arr2) {
    if (!arr1.includes(key2) && arr2.includes(key2)) A.push(key2);
  }
  return A;
}

/**
 * Loại bỏ các số trùng lặp trong mảng, chỉ giữ lại các số duy nhất
 *
 * Lưu ý: Thay đổi trực tiếp mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 */
function removeDuplicate(arr) {
  let A = [];
  for (const key of arr) {
    if (!A.includes(key)) A.push(key);
  }
  arr.length = 0;
  for (const key of A) {
    arr.push(key);
  }
  return arr;
}

/**
 * Tìm số lớn thứ 2 trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn thứ 2 trong mảng
 */
function secondLargest(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length -2];
}

/**
 * Xáo trộn vị trí các phần tử trong một mảng
 *
 * @param {any[]} arr Mảng bất kỳ
 *
 * @return {arr} Mảng bị xáo trộn
 */
function shuffle(arr) {
  let C = arr.sort(() => Math.random() - 0.5);
  return C;
}
