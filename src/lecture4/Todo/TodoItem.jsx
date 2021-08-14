/* eslint-disable no-useless-constructor */
import { Component } from "react";
class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title } = this.props.todos;
    return (
      <>
        <div class="txt_field">
          <div class="display">
            <input type="submit" value=""/>
            <label>{title}</label>
            <button class="margin">Delete</button>
          </div>
        </div>
      </>
    );
  }
}
export default TodoItem;
