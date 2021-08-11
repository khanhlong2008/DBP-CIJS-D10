/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./../Burger/burger.css";
import UpdateAmout from "./UpdateAmout";
class Custom extends Component {
  render() {
    const { salad, bacon, cheese, meat } = this.props.burgerBuilder;
    const {
      updateLess,
      updateMore,
      burgerBuilder,
      selectedburgerBuilder,
    } = this.props;
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
            <UpdateAmout
              // quatity={quatity}
              selectedburgerBuilder={selectedburgerBuilder}
              burgerBuilder={burgerBuilder}
              updateMore={updateMore}
              updateLess={updateLess}
            />
          </div>
          <div className="item item7 font-size">10$</div>
          <div className="item item8 font-size">
            {/* {this.showSubtotal(
              this.state.money.price,
              this.state.Quantity,            
            )} */}
          </div>
          <div className="item item9 font">Cheese</div>
          <div className="item item10 font-size">
            <UpdateAmout
              // quatity={quatity}
              UpdateAmout={selectedburgerBuilder}
              selectedburgerBuilder={burgerBuilder}
              updateMore={updateMore}
              updateLess={updateLess}
            />
          </div>
          <div className="item item11 font-size">20$</div>
          <div className="item item12 font-size"></div>
          <div className="item item13 font">Meat</div>
          <div className="item item14 font-size">
            <UpdateAmout
              // quatity={quatity}
              selectedburgerBuilder={selectedburgerBuilder}
              burgerBuilder={burgerBuilder}
              updateMore={updateMore}
              updateLess={updateLess}
            />
          </div>
          <div className="item item15 font-size">25$</div>
          <div className="item item16 font-size"></div>
          <div className="item item17 font">Bacon</div>
          <div className="item item18 font-size">
            <UpdateAmout
              // quatity={quatity}
              selectedburgerBuilder={selectedburgerBuilder}
              burgerBuilder={burgerBuilder}
              updateMore={updateMore}
              updateLess={updateLess}
            />
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
  // showSubtotal = (price, Quantity)=> {
  //   price = parseInt(price);
  //   Quantity = parseInt(Quantity);
  //   return price * Quantity;
  // };
}
export default Custom;
