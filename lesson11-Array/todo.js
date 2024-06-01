let ToDoData = [];

renderToDo();

function renderToDo() {
  let htmlToDO = "";
  for (let i = 0; i < ToDoData.length; i++) {
    let todo = ToDoData[i];
    const { new_text, new_date } = todo;
    console.log(new_text, new_date);
    let html = `
      <div>${todo.new_text} </div>
      <div>${todo.new_date} </div>
    <button 
     class="dlt-btn" 
     onclick="ToDoData.splice(${i},1);
     renderToDo();">
     Done
    </button>`;

    htmlToDO += html;
  }
  document.querySelector(".To-Do").innerHTML = htmlToDO;
}

function addtodo() {
  let text_value = document.querySelector(".text-input");
  let date_value = document.querySelector(".date_input");
  let new_text = text_value.value;
  let new_date = date_value.value;

  ToDoData.push({
    new_text,
    new_date,
  });
  text_value.value = "";
  date_value.value = "";
  renderToDo();
}
renderToDo();
