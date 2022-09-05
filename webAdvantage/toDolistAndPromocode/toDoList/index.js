"use strict";
function createId() {
  let id = Math.floor(Math.random() * 10000);
  return id;
}
let todos = [
  {
    id: createId(),
    title: "Làm bài tập",
    status: true,
  },
  {
    id: createId(),
    title: "Chơi với bạn bè",
    status: false,
  },
  {
    id: createId(),
    title: "Sang nhà chị thăm người ốm",
    status: true,
  },
];
const todo_list = document.querySelector(".todo-list");
// Render Todo
function renderUI(arr) {
  todo_list.innerHTML = "";

  if (arr.length == 0) {
    todo_list.innerHTML =
      '<p class="todos-empty">Không có công việc nào trong danh sách</p>';
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    todo_list.innerHTML += `
            <div class="todo-item ${t.status ? "active-todo" : "not"}">
                <div class="todo-item-title">
                    <input type="checkbox" ${
                      t.status ? "checked" : ""
                    } onclick="toggleStatus(${t.id})">
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update"onclick="updateTodo(${t.id})">
                        <img src="pencil.png" alt="icon">
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo(${
                      t.id
                    })">
                        <img src="delete.png" alt="icon">
                    </button>
                </div>
            </div>
        `;
  }
}
renderUI(todos);
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
  if (isUpdate) {
    // update
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == idUpdate) {
        todos[i].title = todoTitle;
      }
    }

    btn_add.innerText = "Thêm";
    isUpdate = false;
    idUpdate = "";
  } else {
    let newTodo = {
      id: createId(),
      title: todoTitle,
      status: false,
    };

    todos.push(newTodo);
  }
  renderUI(todos);
  todo_input.value = "";
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
