function info1(a, b) {
  return (s = a + b);
}

function info2(a, b) {
  return (s2 = a - b);
}

function info3(a, b) {
  return (s3 = a * b);
}
function info4(a, b) {
  return (s4 = a / b);
}
info1(3, 5);
info2(3, 5);
info3(3, 5);
info4(3, 5);
console.log(s, s2, s3, s4);
