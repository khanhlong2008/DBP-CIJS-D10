/* eslint-disable no-useless-constructor */
import { Component } from "react";
class AddTodo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div class="txt_field">
              <div class="display">
                <input type="text" />
                <button class="margin">Add</button>
              </div>
            </div>
      </>
    );
  }
}
export default AddTodo;
