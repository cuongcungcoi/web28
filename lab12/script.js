/**
 * Kiểm tra số một số nguyên dương bất kỳ có phải số nguyên tố hay không
 *
 * Số nguyên tố là số chỉ chia hết cho `1` và chính nó
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {boolean} Số `n` cho có phải số nguyên tố hay không
 */
function isPrime(n) {
  if (n == 1) {
    return false;
  }
  if (n == 2) {
    return true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

/**
 * Tính tổng các số nguyên tố trong khoảng từ 1 đến n
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {number} Tổng các số nguyên tố trong khoảng từ `1` đến `n`
 */
function sumOfPrimes(n) {
  let S = 0;
  if (n == 2) {
    return null;
  }
  if (n == 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      S += i;
    }
  }
  return S;
}

/**
 * Tìm số Fibonacci thứ n
 *
 * Dãy Fibonacci là dãy số bắt đầu bằng 0 và 1, các số tiếp theo bằng tổng 2 số trước nó
 *
 * VD: 0 1 1 2 3 5 8 13 ... (Số thứ 1 là 0, số thứ 2 là 1, số thứ 3 là 2, ...)
 *
 * VD: `n = 5`, kết quả số Fibonacci thứ 5 là `3`
 *
 * @param {number} n Số nguyên dương bất kỳ (n > 0)
 *
 * @return {number} Số Fibonacci thứ `n`
 */
function fibonacci(n) {
  let x = 0,
    y = 1;
  if (n % 2 == 0) {
    for (let j = 1; j < n / 2; j++) {
      x = x + y;
      y = x + y;
    }
    return y;
  }
  if (n % 2 != 0) {
    for (let j = 1; j < n / 2; j++) {
      x = x + y;
      y = x + y;
    }
    return x;
  }
}

/**
 * Tính giai thừa của một số nguyên bất kỳ
 *
 * Giai thừa của một số `n = 1 * 2 * 3 * ... * (n - 1) * n`
 *
 * @param {number} n Số nguyên dương bất kỳ (n >= 0)
 *
 * @return {number} Giai thừa của `n`
 */
function factorial(n) {
  let N = 1;
  if (n == 0) {
    return 1;
  }
  for (let i = 1; i <= n; i++) {
    N = N * i;
  }
  return N;
}

/**
 * Kiểm tra một số nguyên dương bất kỳ có phải số Strong hay không
 *
 * Số Strong là số có tổng giai thừa các chữ số bằng chính nó
 *
 * VD: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {boolean} Số `n` có phải là số Strong hay không
 */
function isStrong(n) {
  let S = 0,
    m = n;

  for (let j = n; j >= 1; j = j / 10) {
    let a = 1;
    for (let i = 1; i <= j % 10; i++) {
      a = a * i;
    }
    S = S + a;
  }
  if (S == m) {
    return true;
  } else return false;
}
