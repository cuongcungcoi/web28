//Xử lý số:
//C1
function Thetich(r) {
  return (4 * Math.PI * Math.pow(r, 3)) / 3;
}
//C2
function sumBetween(a, b) {
  let S = 0;
  if (a < b) {
    for (let i = a + 1; i < b; i++) {
      S += i;
    }
  } else if (a >= b) {
    for (let i = b + 1; i < a; i++) {
      S += i;
    }
  }
  return S;
}
console.log(sumBetween(7, 7));
//C3
function sumOfDivisor(n) {
  let A = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      A.push(i);
    }
  }
  S = A.reduce(function (S, number) {
    return S + number;
  });
  return S;
}
console.log(sumOfDivisor(7));
//C4
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
//C5
function sumOfPrimes(n) {
  if (n == 1) {
    return false;
  }
  let A = [];
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      A.push(i);
    }
  }
  S = A.reduce(function (S, number) {
    return S + number;
  });
  return S;
}

//Xử lý chuỗi
//C1
function capitalize(str) {
  str = str.trim();
  str1 = str.split("");
  for (let key in str1) {
    str1[key] = str1[key].toLowerCase();
  }
  str1[0] = str1[0].toUpperCase();
  return str1.join("");
}

function title(str2) {
  str2 = str2.trim();
  str3 = str2.split(" ");
  for (let key in str3) {
    str3[key] = capitalize(str3[key]);
  }
  return str3.join(" ");
}
console.log(title("HELLO World"));
//C2
function parameterize(str) {
  str = str.trim();
  str = str.split(" ");
  for (let key in str) {
    str[key] = str[key].toLowerCase();
  }

  return str.join("-");
}

//C3
function reverseWord(str) {
  str = str.toLowerCase();
  str = str.split("");
  str = str.reverse();
  str = str.join("");
  return str;
}

function isSymmetry(str) {
  str = str.toLowerCase();
  str2 = str.toLowerCase();
  str2 = str2.replace(" ", "");
  str = str.split(" ");
  for (const key in str) {
    str[key] = reverseWord(str[key]);
  }
  str = str.reverse();
  str = str.join("");
  if (str === str2) {
    return true;
  } else return false;
}
console.log(isSymmetry("Hello world"));
//C4
function isContains(strA, strB) {
  strA = strA.toLowerCase();
  strB = strB.toLowerCase();
  strA = strA.split("");
  strB = strB.split("");
  let i = 0;
  for (let value of strA) {
    if (strB.includes(value)) {
      i++;
    }
  }
  if (i == strA.length) {
    return true;
  } else return false;
}
console.log(isContains("howl", "hello world"));
//Xu lý mảng
//C1
function delFalse(arr) {
  let arrNew = [];
  for (const key in arr) {
    if (Boolean(arr[key])) {
      arrNew.push(arr[key]);
    }
  }
  return arrNew;
}
console.log(delFalse([1, 2, false, null, undefined, 5, 67]));
//C2
function maxLength(arr) {
  A = [];
  arr.sort((a, b) => a.length - b.length);
  arrMaxItem = arr.pop();
  A.push(arrMaxItem);
  for (const value of arr) {
    if (value.length == arrMaxItem.length) {
      A.push(value);
    }
  }
  return A;
}
console.log(maxLength(["av", "accc", "addg", "akafa"]));

//C3
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
console.log(difference([1, 2, 3], [1, 3, 4, 5, 5]));
//C4

//Xử lý Obj
//C1
function averageAge(arr) {
  total = arr.reduce(function (S, value) {
    return S + value.age;
  }, 0);
  return total / 3;
}
arr = [
  {
    name: "Cường",
    age: 27,
  },
  {
    name: "Huy",
    age: 20,
  },
  {
    name: "Giang",
    age: 26,
  },
  {
    name: "hinh",
    age: 23,
  },
  {
    name: "Tuấn",
    age: 29,
  },
];
console.log(averageAge(arr));
//C2
function listYonger(arr) {
  arr.sort(function (a, b) {
    return b.age - a.age;
  });
  return arr;
}
//C3
function listAlphabet(arr) {
  arr.sort(function (a, b) {
    if (b.name > a.name) return -1;
  });
  return arr;
}
//C4
function listWith(arr) {
  arrNew = arr.filter(
    (value) => value.name.slice(0, 1) == "h" || value.name.slice(0, 1) == "H"
  );
  return arrNew;
}

//Tổng hợp
//C1
let t = new Date();
function time(t, x) {
  hours = t.getHours() < 10 ? "0" + t.getHours() : t.getHours();
  minute = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes();
  second = t.getSeconds() + x;
}
