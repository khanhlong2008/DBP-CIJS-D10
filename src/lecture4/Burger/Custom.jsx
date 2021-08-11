/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./../Burger/burger.css";
import UpdateAmout from "./UpdateAmout";
class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: [
        {
          id: 1,
          name: "salad",
          price: "10",
        },
        {
          id: 2,
          name: "cheese",
          price: "20",
        },
        {
          id: 3,
          name: "meat",
          price: "25",
        },
        {
          id: 4,
          name: "bacon",
          price: "28",
        },
      ],
      Quantity: 1,
      selectedMoney: [
        {
          id: 4,
          name: "bacon",
          price: "28",
        },
      ],
    };
  }
  render() {
    const { name, price } = this.props;
    const { money, Quantity } = this.state;
    return (
      <div className="custom">
        <p>CUSTOM YOUR BURGER</p>
        <div className="customItem">
          <div className="item item1 font">TOPPING</div>
          <div className="item item2 font">OPTION</div>
          <div className="item item3 font">UNIT PRICE</div>
          <div className="item item4 font">PRICE</div>
          <div className="border1"></div>
          <div className="item item5 font">Salad</div>
          <div className="item item6 font-size">
            <div className="row">
              <input
                type="button"
                value="+"
                className="btn1 btn-info col"
                onClick={() =>
                  this.updateQuantity(this.state.money, this.state.Quantity ,this.state.money.id + 1)
                }
              />
              <p className="col">{this.state.Quantity}</p>
              <input
                type="button"
                value="-"
                className="btn1 btn-info col"
                onClick={() =>
                  this.updateQuantity(this.state.money, this.state.Quantity, this.state.money.id  - 1)
                }
              />
            </div>
          </div>
          <div className="item item7 font-size">10$</div>
          <div className="item item8 font-size">
            {this.showSubtotal(
              this.state.money.price,
              this.state.Quantity,            
            )}
          </div>
          <div className="item item9 font">Cheese</div>
          <div className="item item10 font-size">
            {/* <div className="row">
              <input type="button"value="+"className="btn1 btn-info col"onClick={() =>this.updateQuantity(
                    this.state.money,
                    this.state.Quantity + 1)}/>
              <p className="col">{this.state.Quantity}</p>
              <input type="button"value="-"className="btn1 btn-info col"onClick={() =>this.updateQuantity(
                    this.state.money,
                    this.state.Quantity - 1)}/>
            </div> */}
          </div>
          <div className="item item11 font-size">20$</div>
          <div className="item item12 font-size"></div>
          <div className="item item13 font">Meat</div>
          <div className="item item14 font-size">
            {/* <div className="row">
              <input type="button"value="+"className="btn1 btn-info col"onClick={() =>this.updateQuantity(
                    this.state.money,
                    this.state.Quantity + 1)}/>
              <p className="col">{this.state.Quantity}</p>
              <input type="button"value="-"className="btn1 btn-info col"onClick={() =>this.updateQuantity(
                    this.state.money,
                    this.state.Quantity - 1)}/>
            </div> */}
          </div>
          <div className="item item15 font-size">25$</div>
          <div className="item item16 font-size"></div>
          <div className="item item17 font">Bacon</div>
          <div className="item item18 font-size">
            {/* <div className="row">
              <input type="button"value="+"className="btn1 btn-info col"onClick={() =>this.updateQuantity(
                    this.state.money,
                    this.state.Quantity + 1)}/>
              <p className="col">{this.state.Quantity}</p>
              <input type="button"value="-"className="btn1 btn-info col"onClick={() =>this.updateQuantity(
                    this.state.money,
                    this.state.Quantity - 1)}/>
            </div> */}
          </div>
          <div className="item item19 font-size">28$</div>
          <div className="item item20 font-size"></div>
          <div className="border2"></div>
          <div className="item item21 font">TOTAL COST :</div>
          <div className="item item22 font-size">$</div>
          <div className="item  item24">
            <input className="btn2 btn-info  font-size2 center" value="RESET" />
          </div>
          <div className="item  item23">
            <input
              className="btn2 btn-info  font-size2 center"
              value="ORDER NOW"
            />
          </div>
        </div>
      </div>
    );
  }
  showSubtotal = (price, Quantity)=> {  
    price = parseInt(price);
      Quantity = parseInt(Quantity);
    return price * Quantity;
  };
  updateQuantity = (custom, Quantity,id) => {
    const money = this.state.money;
    const idx = money.findIndex((money) => money.id === id);
    if (Quantity > 0 && idx !== -1) {
      this.setState({
        Quantity: Quantity,
        selectedMoney: money[idx],
      });
    }
    console.log(custom);
  };
}
export default Custom;
