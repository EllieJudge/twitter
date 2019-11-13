import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { StickyContainer, Sticky } from "react-sticky";
import BannerImg from "./Components/BannerImg/BannerImg";
import StatBar from "./Components/StatBar/StatBar";
import LeftProfileCard from "./Components/LeftProfileCard/LeftProfileCard";
import MiddleColumn from "./Components/MiddleColumn/MiddleColumn";
import RightSideCards from "./Components/RightSideCards/RightSideCards"


class App extends Component {
	state = {
		user: {
			fullName: "Britney Spears",
			userName: "@britneyspears",
			avatar: "https://pbs.twimg.com/profile_images/1081235040695009281/P0mr7PUX_bigger.jpg",
			tweet: "Can you believe that this album was released 20 years ago today?! I can’t. It’s been the journey of a lifetime, but I’m grateful for every moment. Getting to know you all over the years has been such an incredible experience. Thank you for all your support ❤️ #BabyOneMoreTime20",
			optionalImg: "",
			comments: 5.4,
			retweets: 25,
			love: 115,
			date: 'Nov 14',
		}
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

					<MiddleColumn user={this.state.user}/>

					<RightSideCards />

				</div>
			</StickyContainer>
		);
	}
}

export default App;
