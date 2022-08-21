let arr = [4, 15, 3, 2, 4, 5, 90, 7, 9, 9, 65, 24, 21];
b = arr.reduce(function (S, value) {
  S *= value;
  return S;
});
console.log(b);
