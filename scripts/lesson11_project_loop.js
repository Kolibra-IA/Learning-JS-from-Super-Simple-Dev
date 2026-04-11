const todoList = ["Buy groceries", "Walk the dog", "Read a book"];
renderTodoList();
function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  const todoListElement = document.querySelector(".js-todo-list");
  todoListElement.innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  console.log(name);
  todoList.push(name);

  console.log(todoList);
  renderTodoList();
}
