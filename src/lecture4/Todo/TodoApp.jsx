/* eslint-disable no-unreachable */
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
        { id: 0, title: "Đi cafe với gấu", isCompleted: true },
        { id: 1, title: "Học ReactJS", isCompleted: false },
        { id: 2, title: "Học cách thổi nến", isCompleted: false },
        { id: 3, title: "Dắt gấu đi dạo", isCompleted: false },
        { id: 4, title: "Trade coin", isCompleted: false },
      ],
    };
  }
  render() {
    const { todos } = this.state;
    return (
      <>
        <section className="center">
          <div method="post">
            <h4>FILLER TASKS (BY NAME)</h4>
            <FillerTodo />
            <h4>TODO</h4>
            <TodoList todos={todos} onDeleteTodoItem={this.onDeleteTodoItem} />
            <h4>ADD ITEM</h4>
            <AddTodo onAddTodoItem={this.onAddTodoItem} />
          </div>
        </section>
      </>
    );
  }

  onAddTodoItem = (newtodos) => {
    const todos  = this.state.todos;
    let maxid = 0;
    todos.forEach((character) => {
      if (character.id > maxid) {
        maxid = character.id;
        return maxid;
      }
      console.log(maxid);
    });
    todos.isCompleted = false;
    const isCompleted = todos.isCompleted;
    const newId = maxid + 1;
    const newTodo = { ...newtodos, id: newId, isCompleted };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  onDeleteTodoItem = (todo,id) => {
    const todos  = this.state.todos;
    const valueToRemove =  todo
    const newTodo = todos.filter(item => item !== valueToRemove);
    this.setState({
      todos: newTodo
    });
    console.log(todo)
  };
  
}
export default TodoApp;
