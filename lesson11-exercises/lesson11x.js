let todoList = JSON.parse(localStorage.getItem("todos")) || [
  { name: "make dinner", dueDate: "22-12-2023" },
  { name: "wash dishes", dueDate: "23-12-2023" },
  { name: "watch YouTube", dueDate: "24-12-2023" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    todoListHTML += `<div>${todoList[i].name}</div> <div>${todoList[i].dueDate}</div><button onclick ='todoList.splice(${i},1); renderTodoList();' class='delete-btn'>DELETE</button>`;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const dateElement = document.querySelector(".js-due-date-input");
  todoList.push({ name: inputElement.value, dueDate: dateElement.value });
  localStorage.setItem("todos", JSON.stringify(todoList));
  console.log(todoList);

  inputElement.value = "";
  dateElement.value = "";
  renderTodoList();
}

function clearTodos() {
  todoList = [];
  localStorage.removeItem("todos");
  renderTodoList();
}

document.querySelector(".clear-todos").addEventListener("click", function () {
  clearTodos();
});

/*
const todoList = ["make dinner", "wash dishes", "watch YouTube"];

for (let i = 0; i < todoList.length; i++) {
  const value = todoList[i];
  console.log(value);
}

*/

/*

const nums = [1, 1, 3];
let total = 0;

for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}

console.log(total);

*/
