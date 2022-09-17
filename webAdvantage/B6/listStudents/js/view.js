export const renderStudents = (data) => {
  $("tbody").html = "";
  data.forEach(({ id, fullname, dateOfBirth, email, phone }) => {
    $(`<tr class="body-table">
    <td>${fullname}</td><td class="dob">${dateOfBirth}</td>
    <td class="email">${email}</td><td class="phone">${phone}</td>
    <td>
    <div class="option"><div class ="edit"><a href ="edit.html?id=${id}"><ion-icon name="create-outline"></ion-icon>Chỉnh sửa|</a></div>
    <div class ="remove"><ion-icon name="trash-outline"></ion-icon>Xóa</div></div></td></tr>`).appendTo(
      $("tbody")
    );
  });
};
