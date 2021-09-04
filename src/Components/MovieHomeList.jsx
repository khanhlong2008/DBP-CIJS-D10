import React, { Component } from "react";
import API from "../Utils/Api";
import MovieItem from "./MovieItem";
class MovieHomeList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			popular: [],
			show: [],
			status: null
		};
	}
	async componentDidMount() {
		console.log('mounted')
		try {
			const reponsePopular = await API.fetchPopularAPI();
			this.setState({
				popular: reponsePopular.data.results,
			});
		} catch (err) {
			console.log(err);
		}

	}
	async componentDidUpdate() {
		// var { status } = this.props;
		// // console.log(status)
		// try {
		//     if (this.state.status == status){
		//         return;
		//     }
		//     if (status === 0) {
		//         const reponsePopular = await API.fetchPopularAPI();
		//         this.setState({
		//             show: reponsePopular.data.results,
		//             status:status
		//         });
		//     } else if (status === 1) {
		//         const reponseComing = await API.fetchComingAPI();
		//         this.setState({
		//             show: reponseComing.data.results,
		//             status:status
		//         });
		//     } else {
		//         const reposeRate = await API.fetchRatedAPI();
		//         this.setState({
		//             show: reposeRate.data.results,
		//             status:status
		//         });
		//     }
		// } catch (err) {
		//     console.log(err)
		// }
		// console.log(this.state)
	};
	render() {
		const { show } = this.props
		// console.log("render MHL")
		// const { show } = this.state;
		// console.log(show)
		return (
			<div className="contaner">
				<div className="movieList center">
					{show.map((popularItem, index) => {
						return <MovieItem key={index} popular={popularItem} />;
					})}
					,
				</div>
			</div>
		);
	}
}

export default MovieHomeList;
