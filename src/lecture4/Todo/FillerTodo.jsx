/* eslint-disable no-useless-constructor */
import { Component } from "react";
class FillerTodo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div class="txt_field">
          <div class="display">
            <input type="text" />
            <button class="margin">Clear</button>
          </div>
          <label></label>
        </div>
      </>
    );
  }
}
export default FillerTodo;
