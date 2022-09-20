import { createStudent } from "./api.js";
const $btn = $("button");
$btn.on("click", () => {
  let student = {
    fullname: $("#fullname").val(),
    dateOfBirth: $("#dob").val(),
    email: $("#email").val(),
    phone: $("#phone").val(),
  };
  for (const key in student) {
    if (student[key] != "") {
      createStudent(student);
      break;
    }
  }
});
