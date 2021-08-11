/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./../Burger/burger.css";
class UpdateAmout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quantity: 1,
    };
  }
  render() {
      var { Quantity } = this.state;
    return (
      
        <div className="row">
          <input
            type="button"
            value="+"
            className="btn1 btn-info col"
            onClick={() =>
              this.updateQuantity(
                this.props.UpdateAmout,
                this.state.Quantity + 1
              )
            }
          />
          <p className="col">{this.state.Quantity}</p>
          <input
            type="button"
            value="-"
            className="btn1 btn-info col"
            onClick={() =>
              this.updateQuantity(
                this.props.UpdateAmout,
                this.state.Quantity - 1
              )
            }
          />
        </div>
      
    );
  }
  updateQuantity = (UpdateAmout, Quantity) => {
    if (Quantity > 0) {
      this.setState({
        Quantity: Quantity,
      });
    }
    console.log(UpdateAmout)
  };
}
export default UpdateAmout;
