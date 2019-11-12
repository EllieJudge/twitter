import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { StickyContainer, Sticky } from "react-sticky";
import BannerImg from "./Components/BannerImg/BannerImg";
import StatBar from "./Components/StatBar/StatBar";
import LeftProfileCard from "./Components/LeftProfileCard/LeftProfileCard";
import TweetCard from "./Components/TweetCard/TweetCard";
import RightSideCards from "./Components/RightSideCards/RightSideCards"


class App extends Component {
	state = {
		user: []
	};
	render() {
		console.log("State: ", this.state.user);
		return (
			<StickyContainer style={{ backgroundColor: "#E2E6EB" }}>
				<Sticky>{({ style }) => <NavBar style={{ ...style }} />}</Sticky>

				<BannerImg />

				<StatBar />

				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<LeftProfileCard />

					<TweetCard />

					<RightSideCards />

				</div>
			</StickyContainer>
		);
	}
}

export default App;
