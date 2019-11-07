import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { StickyContainer, Sticky } from "react-sticky";
import BannerImg from "./Components/BannerImg/BannerImg";
import StatBar from "./Components/StatBar/StatBar";

class App extends Component {
	render() {
		return (
			<StickyContainer>
				<Sticky>{({ style }) => <NavBar style={{ ...style }} />}</Sticky>

				<BannerImg />

				<StatBar />

				<h1 style={{ height: "500px", backgroundColor: "whitesmoke" }}>
					fdsoavfovhffor
				</h1>
				<h1 style={{ height: "500px", backgroundColor: "whitesmoke" }}>
					fdsoavfovhffor
				</h1>
				<h1 style={{ height: "500px", backgroundColor: "whitesmoke" }}>
					fdsoavfovhffor
				</h1>
			</StickyContainer>
		);
	}
}

export default App;
