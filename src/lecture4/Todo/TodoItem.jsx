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
        <form>
          <div className="txt_field">
            <div className="display">
              <input type="text" defaultValue={title} />
              <button className="margin">Delete</button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default TodoItem;
