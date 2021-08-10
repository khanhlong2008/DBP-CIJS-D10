/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { name, price, img, id } = this.props.product;
    const { onSelectedProduct } = this.props;
    return (
      <div className="card p-5" style={{ width: "28rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title mb-3">{name}</h5>
          <p>{price}</p>
          <div className="row d-flex  justify-content-between ">
            <a
              onClick={() => onSelectedProduct(id)}
              className="btn btn-success col-5 pb"
            >
              Xem chi tiết
            </a>
            <a
              onClick={() => onSelectedProduct(id)}
              className="btn btn-danger col-5 pb"
            >
              Thêm giỏ hàng
            </a>
          </div>
        </div>
      </div>
    );
  }
}
