/* eslint-disable no-unreachable */
/* eslint-disable default-case */
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
      burgerBuilder: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0,
      },
      custom :[]
    };
  }
  onPlusTopping = (burgerBuilder) => {
    const custom = this.state.burgerBuilder;
    switch (custom) {
      case 1:
        custom.salad +=1
        return this.setState({
          custom: salad
        })
        break;
      case 2:
        cheese.cheese += 1
        return this.setState({
          cheese: cheese,
        });
        break;
      case 3:
        meat.meat +=1
        return this.setState({
          meat: meat,
        });
        break;
      case 4:
        bacon.bacon +=1
        return this.setState({
          bacon: bacon,
        });
        break;
    }
  };
  onPlusTopping = (burgerBuilder, quatity) => {
    if (quatity > 0) {
      this.setState({
        quatity: quatity,
      });
      console.log(burgerBuilder);
    }
  };
  onMinusTopping = () => {};
  render() {
    const { burgerBuilder,custom } = this.state;

    return (
      <div className=" display">
        <Box />
        <Custom
        custom={custom}
          burgerBuilder={burgerBuilder}
          onPlusTopping={this.onPlusTopping}
          onMinusTopping={this.onMinusTopping}
        />
      </div>
    );
  }
}
export default LDMajor;
