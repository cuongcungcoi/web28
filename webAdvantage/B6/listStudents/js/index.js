"use strict";
const $container = $(".container");
$('<div class="header1"></div>').appendTo($container);
$('<h1 id="heading"><b> Danh Sách Học Viên</b></h1>').appendTo(".header1");
$('<div class="add-area"></div>').appendTo($container);
$(".add-area").append($("<a/>"));
$("a").append(
  $(
    '<div class ="add-student"><ion-icon name="add-circle-outline"></ion-icon>Thêm học viên </div>'
  )
);
$("a").attr({
  href: "create.html",
});
$('<table class="table-students"></table>').appendTo($container);
const $table = $(".table-students");
$(
  '<tr class="header-table"><th class="name">Họ Tên</th><th class="dob">Ngày Sinh</th><th class="email">Email</th><th class="phone">Số điện thoại</th><th></th></tr>'
).appendTo($table);
$table.append($("<tbody/>"));
// $(
//   '<tr class="body-table"><td>Bùi Quang Huy</td><td class"dob">16/9/1996</td><td class"email">quanghuy69@gmail.com</td><td class"phone">0983403123</td><td><div class="option"><div class ="edit"><a href ="edit.html?id=1"><ion-icon name="create-outline"></ion-icon>Chỉnh sửa|</a></div><div class ="remove"><ion-icon name="trash-outline"></ion-icon>Xóa</div></div></td></tr>'
// ).appendTo($("tbody"));
$("a").css({
  textDecoration: "none",
  color: "blue",
  display: "flex",
});

$(".header-table").css({
  backgroundColor: "black",
  color: "white",
  textAlign: "center",
});
const $addStudent = $(".add-student");
$addStudent.css({
  backgroundColor: "green",
  color: "white",
  border: "none",
  height: "30px",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "150px",
});
$(".add-area").css({
  paddingLeft: "2px",
});
$table.css({
  marginTop: "3px",
  boxShadow: "1px 1px 2px",
});
$("th").css({
  width: "200px",
});
$("tr").css({
  height: "30px",
});

$(".option").css({
  display: "flex",
});
$(".edit").css({
  color: "#048eeb",
  display: "flex",
});
$(".remove").css({
  color: "red",
  display: "flex",
});
