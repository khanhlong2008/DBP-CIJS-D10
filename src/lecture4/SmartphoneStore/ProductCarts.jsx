/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */

import { Component } from "react";

class ProductCarts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quantity: 1,
    };
  }

  render() {
    const { img, name, price, id } = this.props.productCarts;
    var { Quantity } = this.state;
    return (
      <div>
        <div className="modal-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Mã sản phẩm</th>
                <th scope="col">Hình ảnh</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Đơn giá</th>
                <th scope="col">Thành tiền</th>
                <th scope="col">Hủy bỏ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <img src={img} alt="" style={{ width: "3rem" }} />
                </td>
                <td>{name}</td>

                <td className="row">
                  <input
                    type="button"
                    value="+"
                    className="col btn-primary"
                    onClick={() =>
                      this.updateQuantity(
                        this.props.productCarts,
                        this.state.Quantity + 1
                      )
                    }
                  />
                  <p className="col text-center">{this.state.Quantity}</p>
                  <input
                    type="button"
                    value="-"
                    className="col btn-primary"
                    onClick={() =>
                      this.updateQuantity(
                        this.props.productCarts,
                        this.state.Quantity - 1
                      )
                    }
                  />
                </td>

                <td>{price}</td>
                <td>{this.showSubtotal(price, this.state.Quantity)} $</td>
                <td>
                  <a
                    onClick={() => this.onDelete(this.props.productCarts)}
                    className="btn btn-danger "
                  >
                    Xóa
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Đóng
          </button>
        </div>
      </div>
    );
  }
  updateQuantity = (productCarts, Quantity) => {
    if (Quantity > 0) {
      this.setState({
        Quantity: Quantity,
      });
    }
  };
  showSubtotal = (price, Quantity) => {
    price = parseFloat(price);
    Quantity = parseFloat(Quantity);
    return price * Quantity;
  };
  onDelete = (id) => {
    console.log(id);
  };
}
export { ProductCarts };
