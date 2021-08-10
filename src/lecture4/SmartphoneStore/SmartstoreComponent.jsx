import React, { Component } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import {ProductCarts} from "./ProductCarts"
export default class SmartphoneStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Samsung Galaxy A10",
          price: "1200 $",
          img: "assets/img/samsung-galaxy.jpg",
          info: {
            screen: "AMOLED Full HD 9.0",
            os: "Android 9.0",
            frontCamera: "20MP",
            backCamera: "Chính 48MB, phụ 30MP",
          },
          ram: "4 GB",
          rom: "64 GB",
        },
        {
          id: 2,
          name: "IPhone12",
          price: "3200 $",
          img: "assets/img/iphone-12.jpg",
          info: {
            screen: "Full HD 12.0",
            os: "IOS 14",
            frontCamera: "20MP",
            backCamera: "Chính 100MB, phụ 30MP",
          },
          ram: "16 GB",
          rom: "32 GB",
        },
        {
          id: 3,
          name: "Xiaomi Note 10",
          price: "900 $",
          img: "assets/img/xiaomi-mi-11.jpg",
          info: {
            screen: "OLED 10.0",
            os: "Android 8.0",
            frontCamera: "69MP",
            backCamera: "Chính 96MB, phụ 30MP",
          },
          ram: "10 GB",
          rom: "64 GB",
        },
      ],
      selectedProduct: {
        id: 1,
        name: "Samsung Galaxy A10",
        price: "1200 $",
        img: "assets/img/xiaomi-mi-11.jpg",
        info: {
          screen: "AMOLED Full HD 9.0",
          os: "Android 9.0",
          frontCamera: "20MP",
          backCamera: "Chính 48MB, phụ 30MP",
        },
        ram: "4 GB",
        rom: "64 GB",
      },
      cart: [],
    };
  }

  onSelectedProduct = (id) => {
    const products = this.state.products;
    const idx = products.findIndex((product) => product.id === id);

    if (idx !== -1) {
      this.setState({
        selectedProduct: products[idx],
      });
    }
  };
  
  render() {
    const { products, selectedProduct } = this.state;
    return (
      <div className="container pt-5">
        <div className="row d-flex  bd-highlight " >
        <div className="col p-2 flex-grow-1 bd-highlight"><h1 className="text-primary ">Thế giới di động</h1></div>
          <div className="col  p-2 bd-highlight">
          
          {/* Button to show Modal */}
      <div>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Giỏ hàng
          </button>
          {/* Modal */}

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Giỏ hàng
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                
                <ProductCarts productCarts ={selectedProduct}/>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
        <ProductList
          products={products}
          onSelectedProduct={this.onSelectedProduct}
        />
        <ProductDetail 
          products={products}
          productDetail={selectedProduct} 
        />

      
      </div>
    );
  }
}
