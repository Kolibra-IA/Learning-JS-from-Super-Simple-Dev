const todoList = [
  { name: "Buy groceries", dueDate: "2-2-2022" },
  { name: "Walk the dog", dueDate: "3-9-2023" },
];
renderTodoList();
function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `<div>${name} </div> <div>${dueDate}</div> <button onclick='todoList.splice(${i}, 1); renderTodoList();'> DELETE </button>`;
    todoListHTML += html;
  }

  const todoListElement = document.querySelector(".js-todo-list");
  todoListElement.innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-date-input");
  const dueDate = dateInputElement.value;
  console.log(name);
  todoList.push({ name, dueDate });

  console.log(todoList);
  renderTodoList();
}
