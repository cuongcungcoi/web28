"use strict";
let listTodo = document.querySelector("#todolist");
let basicURL = "https://jsonplaceholder.typicode.com/todos?userId=1";
let itemURL = "https://jsonplaceholder.typicode.com/todos";

//Function
function gettodolist(callback) {
  fetch(basicURL)
    .then((res) => res.json())
    .then(callback);
}

function addTodo(todo, callback) {
  fetch(itemURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  })
    .then((res) => res.json())
    .then(callback);
}
const deleteToDo = (id, callback) => {
  fetch(itemURL + "/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then(callback);
};
const editTodo = (id, callback) => {
  fetch(itemURL + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  }).then(callback);
};
const renderUI = (todos) => {
  listTodo.innerHTML = todos
    .map(
      (todo) => ` 
    <li class="todo item-${todo.id}"><span>${todo.id}.</span><p>${todo.title}</p>
    <button onclick ="deleteToDo(${todo.id},delTodo(${todo.id}))">Xóa</button><button onclick ="updateToDo1(${todo.id}) class = "item-edit"">Edit</button></li>`
    )
    .join("");
};
const creatNewToDo = (todo) => {
  listTodo.innerHTML += ` 
    <li class="todo item-${todo.id - 180}"><span>${todo.id - 180}.</span><p>${
    todo.title
  }</p>
    <button>Xóa</button><button onclick ="updateToDo1(${
      todo.id
    }) class = "item-edit">Edit</button></li>`;
};
const delTodo = (id) => {
  let delItem = document.querySelector(`.item-${id}`);
  delItem.remove();
};
let render = () => {
  gettodolist(renderUI);
};
render();
let btn = document.querySelector(".add-todo");
let btnEdit = document.querySelector(".item-edit");
let input = document.querySelector("input[name='title'");
btn.onclick = (e) => {
  e.preventDefault();
  let todo = {
    userId: 1,
    title: input.value,
    completed: false,
  };
  addTodo(todo, creatNewToDo);
};
btn;
