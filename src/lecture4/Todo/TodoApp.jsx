import { Component } from "react";
import TodoList from "./TodoList";
import "./../Todo/style.css";
import AddTodo from "./AddTodo";
import FillerTodo from "./FillerTodo";
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: "Đi cafe với gấu", isCompleted: true },
        { id: 2, title: "Học ReactJS", isCompleted: false },
        { id: 3, title: "Học cách thổi nến", isCompleted: false },
        { id: 4, title: "Dắt gấu đi dạo", isCompleted: false },
        { id: 5, title: "Trade coin", isCompleted: false },
      ],
    };
  }
  render() {
    const { todos } = this.state;
    return (
      <>
        <form class="center">
          <div method="post">
            <h4>FILLER TASKS (BY NAME)</h4>
            <FillerTodo />
            <h4>TODO</h4>
            <TodoList todos={todos} />
            <h4>ADD ITEM</h4>
            <AddTodo />
          </div>
        </form>
      </>
    );
  }
  onAddItem = (todos) =>{
    
    var todoItem ={};
    todos.push(todoItem)
  }
}
export default TodoApp;
