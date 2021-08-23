/* eslint-disable no-useless-constructor */
import { Component } from "react";
class AddTodo extends Component {
  state = {
    title: "",
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <div className="txt_field">
            <div className="display">
              <input
                type="text"
                onChange={this.onChangeHandler}
                value={this.state.title}
                name="title"
              />
              <button className="margin" type="submit" >
                Add
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
  onChangeHandler = (e) => {
    const { name, value } = e.target;
    // console.log("name",name)
    // console.log("value",value)
    this.setState({
      [name]: value,
    });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onAddTodoItem(this.state);
  };
}
export default AddTodo;
