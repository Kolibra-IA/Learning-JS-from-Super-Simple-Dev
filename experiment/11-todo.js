const todoList = ["make dinner", "wash dishes"];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    todoListHTML += `<p>${todoList[i]}</p>`;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addtodo() {
  const inputElement = document.querySelector(".js-name-input");
  todoList.push(inputElement.value);
  console.log(todoList);

  inputElement.value = "";
  renderTodoList();
}

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
