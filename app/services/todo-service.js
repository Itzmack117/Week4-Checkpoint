import store from "../store.js";
import Todo from "../models/Todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/mack/todos/",
  timeout: 8000
});

class TodoService {
  async getTodos() {
    let res = await todoApi.get();
    console.log("Getting the Todo List");
    //TODO Handle this response from the server
    let listItems = res.data.data.map(l => new Todo(l))
    console.log(listItems)
    store.commit("todos", listItems)
  }

  addTodoAsync(todo) {
    todoApi.post("", todo)
      //TODO Handle this response from the server (hint: what data comes back, do you want this?)
      .then(res => {
        this.getTodos();
      })
      .catch(e => console.error(e))
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    let done = todo.completed
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    if (done == false) {
      done = true
    } else { done = false }
    console.log(done)
    // todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?

  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    let id = store.State.todos.find(t => t._id == todoId)
    console.log(id)
  }
}

const todoService = new TodoService();
export default todoService;
