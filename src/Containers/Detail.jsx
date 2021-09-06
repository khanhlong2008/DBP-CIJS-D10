import React, { Component } from "react";
import MovieDetail from "../Components/MovieDetail";
import API from "../Utils/Api";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backDrop: [],
      actor: [],
      video: [],
    };
  }
  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const reponseBackDrop = await API.fecthIdDetail(id);
      const reponseActor = await API.fecthActorDetail(id);
      const reponseVideo = await API.fetchVideoAPI(id);
      this.setState({
        backDrop: reponseBackDrop.data,
        actor: reponseActor.data.cast,
        video: reponseVideo.data.results,
      });
    } catch (err) {
      console.log(err);
    }
    const keyx = this.state.video[1];
    this.setState({
      video: keyx,
    });
    console.log(this.state.video)
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
