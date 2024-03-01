const todoContainer = document.getElementById("todo_container");
const getTodoList = () => {
  const data = fetch("http://localhost:3000/todos");
  return data;
};
getTodoList()
  .then((res) => res.json())
  .then((data) => renderTodo(data.slice(0, 10)));

const renderTodo = (todoList) => {
  console.log(todoList);
  todoList.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "box";
    const title = document.createElement("h3");
    title.className = "title";
    title.innerText = todo.title;
    const btn = document.createElement("button");
    btn.className = "btn";
    // btn.style.display="none"
    if (todo.completed == true) {
      div.classList.add("bg-green");
      btn.innerText = "✔️";
    } else {
      div.classList.add("bg-red");
      btn.innerText = "❌";
    }
    div.append(title, btn);
    todoContainer.append(div);
  });
};
