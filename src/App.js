import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { StickyContainer, Sticky } from "react-sticky";
import BannerImg from "./Components/BannerImg/BannerImg";
import StatBar from "./Components/StatBar/StatBar";
// import LeftProfileCard from './Components/LeftProfileCard/LeftProfileCard';
import Grid from './Components/Grid/Grid';


class App extends Component {
	render() {
		return (
			<StickyContainer>
				<Sticky>{({ style }) => <NavBar style={{ ...style }} />}</Sticky>

				<BannerImg />

				<StatBar />

				{/* <LeftProfileCard /> */}


			<Grid />
			
<h1>hfoiaghfipghfioghigheg</h1>
			</StickyContainer>
		);
	}
}

export default App;
