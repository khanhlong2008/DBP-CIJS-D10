/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./../Burger/burger.css";
import UpdateAmout from "./UpdateAmout";
class Custom extends Component {
  render() {
    return (
    <div class="custom">
        <p>CUSTOM YOUR BURGER</p>
        <div class="customItem">
          <div class="item item1 font">TOPPING</div>
          <div class="item item2 font">OPTION</div>
          <div class="item item3 font">UNIT PRICE</div>
          <div class="item item4 font">PRICE</div>
          <div class="border1"></div>
          <div class="item item5 font">Salad</div>
          <div class="item item6 font-size">
              <UpdateAmout/>
          </div>
          <div class="item item7 font-size">10$</div>
          <div class="item item8 font-size">20$</div>
          <div class="item item9 font">Cheese</div>
          <div class="item item10 font-size">
            <UpdateAmout/>
          </div>
          <div class="item item11 font-size">20$</div>
          <div class="item item12 font-size">40$</div>
          <div class="item item13 font">Meat</div>
          <div class="item item14 font-size">
            <UpdateAmout/>
          </div>
          <div class="item item15 font-size">25$</div>
          <div class="item item16 font-size">25$</div>
          <div class="item item17 font">Bacon</div>
          <div class="item item18 font-size">
            <UpdateAmout/>
          </div>
          <div class="item item19 font-size">28$</div>
          <div class="item item20 font-size">28$</div>
        <div className="border2"></div>
          <div class="item item21 font">TOTAL COST :</div>
          <div class="item item22 font-size">$</div>
          <div className="item  item24">
            <input className="btn2 btn-info  font-size2 center" value="RESET"/>
          </div>
          <div className="item  item23">
              <input className="btn2 btn-info  font-size2 center"  value="ORDER NOW"/>
          </div>
        </div>
      </div>
    );
  }
}
export default Custom;
