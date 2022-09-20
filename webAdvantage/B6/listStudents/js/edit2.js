import { getEditStudent, updateStudent } from "./api.js";

const url = new URL(location.href);
const id = url.searchParams.get("id");
const $btn = $("button");
console.log(id);
getEditStudent(id);
$btn.on("click", () => {
  let student = {
    fullname: $("#fullname").val(),
    dateOfBirth: $("#dob").val(),
    email: $("#email").val(),
    phone: $("#phone").val(),
  };
  for (const key in student) {
    if (student[key] != "") {
      updateStudent(id, student);
      break;
    }
  }
});
