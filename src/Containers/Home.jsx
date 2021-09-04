/* eslint-disable no-self-assign */
/* eslint-disable default-case */
import React, { Component } from "react";
import MovieHomeList from "../Components/MovieHomeList";
import API from "../Utils/Api";
import Search from "./../Components/Search";
import Tab from "./../Components/Tab";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: []
			,
			// coming: [],
			// rated:[],
			// popular:[],
			status: 0,
		};

	}
	async componentDidMount() {

		const reponsePopular = await API.fetchPopularAPI();
		this.setState({
			show: reponsePopular.data.results,
			// status: status
		});

	}
	onfetch = async (action) => {
		console.log("run onfetch")
		if (action === 'popular') {
			// const reponsePopular = await API.fetchPopularAPI();
			const reponsePopular = await API.fetchPopularAPI();
			this.setState({
				show: reponsePopular.data.results,
				// status: status
			});

		} else if (action === 'coming') {
			// const reponseComing = await API.fetchComingAPI();

			const reponseComing = await API.fetchComingAPI();
			this.setState({
				show: reponseComing.data.results,
				// status: status
			});
		} else {

			const reposeRate = await API.fetchRatedAPI();
			this.setState({
				show: reposeRate.data.results,
				// status: status
			});
		}
	}

	render() {
		console.log('render home')
		// console.log(this.state)
		const { status } = this.state
		// console.log(status)
		return (
			<div>
				<Search />
				<Tab onfetch={this.onfetch} />
				<MovieHomeList {...this.state} />
			</div>
		);
	}
}

export default Home;
