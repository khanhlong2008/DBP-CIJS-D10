/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./../Burger/burger.css";
class UpdateAmout extends Component {
  render() {
    return (
      
        <div className="row">
          <input
            type="button"
            value="+"
            className="btn1 btn-info col"
            onClick={() =>
              this.updateQuantity(
                this.props.productCarts,
                this.state.Quantity + 1
              )
            }
          />
          <p className="col">1</p>
          <input
            type="button"
            value="-"
            className="btn1 btn-info col"
            onClick={() =>
              this.updateQuantity(
                this.props.productCarts,
                this.state.Quantity + 1
              )
            }
          />
        </div>
      
    );
  }
}
export default UpdateAmout;
