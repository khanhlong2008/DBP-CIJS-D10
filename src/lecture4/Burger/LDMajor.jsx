/* eslint-disable no-cond-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./../Burger/burger.css";
import Box from "./Box";
import Custom from "./Custom";
class LDMajor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerBuilder: [
        {
          id: 0,
          name: "salad",
          quatity: 0,
          price: "10",
        },
        {
          id: 1,
          name: "cheese",
          quatity: 0,
          price: "20",
        },
        {
          id: 2,
          name: "meat",
          quatity: 0,
          price: "25",
        },
        {
          id: 3,
          name: "bacon",
          quatity: 0,
          price: "28",
        },
      ],
      selectedburgerBuilder: {
        id: 0,
        name: "salad",
        quatity: 1,
        price: "10",
      },
    };
  }

  render() {
    const { burgerBuilder } = this.state;
    var { selectedburgerBuilder } = this.state;
    return (
      <div className=" display">
        <Box />
        <Custom
          
          burgerBuilder={burgerBuilder}
          updateLess={this.updateLess}
          updateMore={this.updateMore}
          Custom={selectedburgerBuilder}
        />
      </div>
    );
  }
  updateMore = (selectedburgerBuilder, quatity) => {
    if (quatity > 0) {
      this.setState({
        quatity: quatity,
      });
    }
    console.log(selectedburgerBuilder);
  };
  updateLess = (selectedburgerBuilder, quatity) => {
    if (quatity > 0) {
      this.setState({
        quatity: quatity,
      });
    }
    console.log(selectedburgerBuilder);
  };
}
export default LDMajor;
