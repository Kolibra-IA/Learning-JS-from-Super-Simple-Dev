let todoList = [];
document.querySelector("button").addEventListener("click", function () {
  todoList.push(document.querySelector(".todo").value);
  console.log(todoList);
});
