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
