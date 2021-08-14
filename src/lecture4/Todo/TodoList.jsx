/* eslint-disable no-useless-constructor */
import { Component } from "react";
import TodoItem from "./TodoItem";
class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todos } = this.props;
    return (
      < div>
        {todos.map((todoItem, index) => {
          return <TodoItem key={index} todos={todoItem} />;
        })}
      </div>
    );
  }
}
export default TodoList;
