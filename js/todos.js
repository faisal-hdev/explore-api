function todosFun() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodos(data));
}

function displayTodos(todos) {
  // get the container
  const todoContainer = document.getElementById("todo-container");
  for (const todo of todos) {
    // create the child element
    const todoDiv = document.createElement("div");
    // set the innerText or innerHTML
    todoDiv.innerHTML = `
      <h4>Title ${todo.title}</h4>
      <p>user ID: ${todo.id}</p>
      <p>Is Completed: ${
        todo.completed === true ? "Completed" : "Not complete"
      }</p>
      `;
    // appendChild
    todoContainer.appendChild(todoDiv);
  }
  console.log(todos);
}

todosFun();
