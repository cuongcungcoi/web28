alert("Viet Nam Vo Dich");

let answer = prompt("Who's there?");
if (answer === "" || answer === null) {
  alert("Cancelled");
} else if (answer === "Admin") {
  let pass = prompt("Password");
  if (pass === "" || pass === null) {
    alert("Cancelled");
  } else if (pass === "TheMaster") {
    alert("Wellcome");
  } else alert("Wrong password");
} else alert("I dont know you");
