"use strict";
function createId() {
  let id = Math.floor(Math.random() * 10000);
  return id;
}
const createRow = (newTodo) => {
  return `
            <div class="todo-item ${newTodo.status ? "active-todo" : "not"}">
                <div class="todo-item-title">
                    <input type="checkbox" ${
                      newTodo.status ? "checked" : ""
                    } onclick="toggleStatus(${newTodo.id})">
                    <p>${newTodo.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update"onclick="updateTodo(${
                      newTodo.id
                    })">
                        <img src="pencil.png" alt="icon">
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo(${
                      newTodo.id
                    })">
                        <img src="delete.png" alt="icon">
                    </button>
                </div>
            </div>
        `;
};

const gettodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
    .then((response) => response.json())
    .then((json) => [...json]);
};
const createtodo = (newtodo) => {
  return fetch("https://jsonplaceholder.typicode.com/todos?userId=1", {
    method: "POST",
    body: JSON.stringify(newtodo),
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
};
const todo_list = document.querySelector(".todo-list");
// Render Todo
function renderUI(arr) {
  if (arr.length == 0) {
    todo_list.innerHTML =
      '<p class="todos-empty">Không có công việc nào trong danh sách</p>';
    return;
  }
  todo_list.innerHTML = arr.map(createRow).join("");
}
gettodos().then(renderUI);

const addTodo = (newTodo) => {
  todo_list.insertAdjacentHTML("beforebegin", createRow(newTodo));
};

// Thêm công việc
let btn_add = document.getElementById("btn-add");
let todo_input = document.getElementById("todo-input");
let idUpdate = "";
let isUpdate = false;
btn_add.addEventListener("click", function () {
  let todoTitle = todo_input.value;
  if (todoTitle == "") {
    alert("Nội dung không được để trống");
    return;
  }
  // if (isUpdate) {
  //   // update
  //   for (let i = 0; i < todos.length; i++) {
  //     if (todos[i].id == idUpdate) {
  //       todos[i].title = todoTitle;
  //     }
  //   }

  //   btn_add.innerText = "Thêm";
  //   isUpdate = false;
  //   idUpdate = "";
  else {
    let newTodo = {
      userId: 1,
      id: createId(),
      title: todoTitle,
      completed: false,
    };
    createtodo(newTodo).then(addTodo);
  }
  //   todo_input.value = "";
});
function toggleStatus(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].status = !todos[i].status;
    }
  }
  renderUI(todos);
}
function deleteTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos.splice(i, 1);
    }
  }
  renderUI(todos);
}

function updateTodo(id) {
  let title;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      title = todos[i].title;
    }
  }

  btn_add.innerText = "CẬP NHẬT";

  todo_input.value = title;
  todo_input.focus();

  idUpdate = id;
  isUpdate = true;
}
let all = document.getElementById("all");
let unactive = document.getElementById("unactive");
let actived = document.getElementById("active");
//lọc việc chưa làm
function filterUnActiveTodo() {
  let activeList = document.querySelectorAll(".active-todo");
  for (const job of activeList) {
    job.setAttribute("style", "display:none");
  }

  all.addEventListener("click", allTodo);
  actived.addEventListener("click", () => {
    allTodo();
    filterActiveTodo();
  });
}
//lọc việc làm rồi
function filterActiveTodo() {
  let unActiveList = document.querySelectorAll(".not");
  for (const job of unActiveList) {
    job.setAttribute("style", "display:none");
  }
  all.addEventListener("click", allTodo);
  unactive.addEventListener("click", () => {
    allTodo();
    filterUnActiveTodo();
  });
}
//tất cả các việc
function allTodo() {
  let allList = document.querySelectorAll(".todo-item");
  for (const job of allList) {
    job.removeAttribute("style");
  }
}

unactive.addEventListener("click", filterUnActiveTodo);
all.addEventListener("click", allTodo);
actived.addEventListener("click", filterActiveTodo);
