let id_button = 0;
let id_word;
let parentOne;
let parentTwo;

const addBtn = document.querySelector(".add_button");
const txtInput = document.querySelector(".text_input");
const dateInput = document.querySelector(".date_input");
const todoDiv = document.querySelector(".todos_ui");

addBtn.addEventListener("click", function () {
  id_button++;
  id_word = `id${id_button}`;
  if (txtInput.value && dateInput.value) {
    const p_todo = document.createElement("p");
    const span_todo = document.createElement("span");
    const span_date = document.createElement("span");
    const btn = document.createElement("button");

    span_todo.textContent = txtInput.value;
    span_date.textContent = dateInput.value;
    btn.textContent = "DELETE";

    p_todo.appendChild(span_todo);
    p_todo.appendChild(span_date);
    p_todo.appendChild(btn);

    todoDiv.appendChild(p_todo);

    btn.addEventListener("click", function () {
      const p_parent = btn.parentNode;

      p_parent.parentNode.removeChild(p_parent);
    });
  }
});
