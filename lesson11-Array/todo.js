let ToDoArray = [];

function renderToDo() {
  let htmlToDO = "";
  for (let i = 0; i < ToDoArray.length; i++) {
    let todo = ToDoArray[i];
    console.log(todo);
    let html = `<p>${todo}</p>`;
    htmlToDO += html;

    document.querySelector(".To-Do").innerHTML = htmlToDO;
  }
}
renderToDo();
function addtodo() {
  let text_value = document.querySelector(".text-input");
  let new_text = text_value.value;
  ToDoArray.push(new_text);
  console.log(ToDoArray);
  renderToDo();
}
