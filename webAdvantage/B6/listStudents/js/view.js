import { deleteStudent } from "./api.js";
import { getStudents } from "./api.js";

export const renderStudents = (data) => {
  $("tbody").html = "";
  data.forEach(({ id, fullname, dateOfBirth, email, phone }) => {
    const $tr = $(`<tr class="body-table">
    <td>${fullname}</td><td class="dob">${dateOfBirth}</td>
    <td class="email">${email}</td><td class="phone">${phone}</td>
    <td>
    <div class="option"><div class ="edit"><a href ="edit.html?id=${id}"><ion-icon name="create-outline"></ion-icon>Chỉnh sửa|</a></div>
    <div class ="remove"><a class = "delete"><ion-icon name="trash-outline"></ion-icon>Xóa</a></div></td></tr>`);
    $tr.find(".delete").on("click", { id, fullname }, () => {
      if (confirm(`Bạn có chắc chắn muốn xóa ${fullname}`)) {
        deleteStudent(id);
        $tr.remove();
      }
    });
    $tr.appendTo($("tbody"));
  });
};
export const addStudent = () => {
  getStudents(renderStudents);
};

export function fillEditStudent({ fullname, dateOfBirth, email, phone }) {
  $("#fullname").val(fullname);
  $("#dob").val(dateOfBirth);
  $("#email").val(email);
  $("#phone").val(phone);
}
