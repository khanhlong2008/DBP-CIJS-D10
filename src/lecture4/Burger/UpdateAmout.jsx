/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./../Burger/burger.css";
class UpdateAmout extends Component {
    constructor(props){
        super(props)
        
    }
  render() {
  const {updateMore,updateLess}= this.props
  var {quatity}= this.props.selectedburgerBuilder
    return (
      <div className="row">
        <input
          type="button"
          value="+"
          className="btn1 btn-info col"
          onClick={() =>
            updateMore(quatity +1)
          }
        />
        <p className="col">{quatity}</p>
        <input
          type="button"
          value="-"
          className="btn1 btn-info col"
          onClick={() =>
            updateLess(quatity -1)
          }
        />
      </div>
    );
  }
}
export default UpdateAmout;
