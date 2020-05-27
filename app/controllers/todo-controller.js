import TodoService from "../services/todo-service.js";
import store from "../store.js";
import Todo from "../models/Todo.js";

//TODO Create the render function
function _drawTodos() {
  let template = ''
  store.State.todos.forEach(item => {
    template += `<li class="action">
    <div class ="inline"><input class="align-middle" type="checkbox" ${item.completed ? "checked" : ""}><div onclick="app.TodoController.toggleTodoStatus(${item._id})">${item.description}</div></div><button class="btn btn-danger deleteBtn float-right" onclick="app.TodoController.removeTodo(${item._id})"></button></li>`
  });
  document.getElementById('list-items').innerHTML = template;
  // document.getElementById('task-count').innerText = 
}

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos);
    //TODO Remember to register your subscribers
    TodoService.getTodos();
  }

  addTodo(event) {
    event.preventDefault();
    let formData = event.target;
    console.log(formData)
    let todo = {
      description: formData.description
      //TODO build the todo object from the data that comes into this method
    };
    console.log(todo)
    TodoService.addTodoAsync(todo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);

  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
