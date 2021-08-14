/* eslint-disable no-useless-constructor */
import { Component } from "react";
class FillerTodo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <form>
          <div className="txt_field">
            <div className="display">
              <input type="text" />
              <button className="margin">Clear</button>
            </div>
            <label />
          </div>
        </form>
      </>
    );
  }
}
export default FillerTodo;
