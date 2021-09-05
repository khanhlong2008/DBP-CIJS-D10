import React, { Component } from "react";
import MovieDetail from "../Components/MovieDetail";
import API from "../Utils/Api";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backDrop: [],
      actor: [],
    };
  }
  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const reponseBackDrop = await API.fecthIdDetail(id);
      const reponseActor = await API.fecthActorDetail(id);
      this.setState({
        backDrop: reponseBackDrop.data,
        actor: reponseActor.data.cast,
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div>
        <MovieDetail {...this.state} />

      </div>
    );
  }
}

export default Detail;
