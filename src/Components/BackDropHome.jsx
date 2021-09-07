import React, { Component } from "react";
import API from "../Utils/Api";
import BackDropHomeItem from "./BackDropHomeItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class BackDropHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: [],
    };
  }
  async componentDidMount() {
    try {
      const reponse = await API.fetchPopularAPI();
      this.setState({
        show: reponse.data.results,
      });
    } catch (err) {
      console.log(err);
    }
    // const adx = this.state.show[0];
    // this.setState({
    //   show: adx,
    // });
    // console.log(this.state)
  }
  render() {
    const { show } = this.state;
    // console.log(show)
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div className="backDropHome">
        <Slider {...settings}>
        {show.map((item,index)=>{
          return <BackDropHomeItem
            key={index}
            item={item}
          />
        })}
        
        </Slider>
       </div>
    );
  }
}

export default BackDropHome;
