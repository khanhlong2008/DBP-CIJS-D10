/* eslint-disable no-useless-constructor */

import { Component } from "react";
import "./../Burger/burger.css";
class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {
          priceSalad: 10,
          pricecheese: 20,
          pricemeat: 25,
          pricebacon: 28,
    };
  }
  render() {
    const { onMinusTopping, onPlusTopping, burgerBuilder } = this.props;
    const { priceSalad, pricecheese, pricemeat, pricebacon ,} = this.state;
    const { salad,cheese,meat,bacon} = burgerBuilder;
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
            {/* <UpdateAmout
              burgerBuilder={burgerBuilder}
              onMinusTopping={onMinusTopping}
              onPlusTopping={onPlusTopping}
            /> */}
            <div className="row">
              <input
                type="button"
                value="+"
                className="btn1 btn-info col"
                onClick={() => onPlusTopping("salad"+1)}
              />
              <p className="col">{salad}</p>
              <input
                type="button"
                value="-"
                className="btn1 btn-info col"
                onClick={() => onMinusTopping("salad"-1)}
              />
            </div>
          </div>
          <div className="item item7 font-size">{priceSalad}$</div>
          <div className="item item8 font-size"></div>
          <div className="item item9 font">Cheese</div>
          <div className="item item10 font-size">{/* <UpdateAmout /> */}
          <div className="row">
              <input
                type="button"
                value="+"
                className="btn1 btn-info col"
                onClick={() => onPlusTopping(burgerBuilder)}
              />
              <p className="col">{cheese}</p>
              <input
                type="button"
                value="-"
                className="btn1 btn-info col"
                onClick={() => onMinusTopping(burgerBuilder)}
              />
            </div>
          </div>
          <div className="item item11 font-size">{pricecheese}$</div>
          <div className="item item12 font-size"></div>
          <div className="item item13 font">Meat</div>
          <div className="item item14 font-size">{/* <UpdateAmout /> */}</div>
          <div className="item item15 font-size">{pricemeat}$</div>
          <div className="item item16 font-size"></div>
          <div className="item item17 font">Bacon</div>
          <div className="item item18 font-size">{/* <UpdateAmout /> */}</div>
          <div className="item item19 font-size">{pricebacon}$</div>
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
}
export default Custom;
