/* eslint-disable no-useless-constructor */
import { Component } from "react";
class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title ,id } = this.props.todos;
    const {onDeleteTodoItem ,todos} = this.props
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <div className="txt_field">
            <div className="display">
              <input type="text" value={title} />
              <button className="margin" type="submit" onClick={() => onDeleteTodoItem(todos,id)}>Delete</button>
            </div>
          </div>
        </form>
      </>
    );
  }
  onSubmitHandler = e => {
    e.preventDefault();

  }
}
export default TodoItem;
