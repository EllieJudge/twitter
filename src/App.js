import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { StickyContainer, Sticky } from "react-sticky";
import BannerImg from "./Components/BannerImg"
import StatBar from "./Components/StatBar/StatBar";
import LeftProfileCard from "./Components/LeftProfileCard";
import MiddleColumn from "./Components/MiddleColumn/MiddleColumn";
import RightSideCards from "./Components/RightSideCards/RightSideCards";
import useStyles from "./AppStyle";

const App = () => {
	const [user] = useState({
		fullName: "Britney Spears",
		userName: "@britneyspears",
		avatar:
			"https://pbs.twimg.com/profile_images/1081235040695009281/P0mr7PUX_bigger.jpg",
		tweet:
			"Can you believe that this album was released 20 years ago today?! I can’t. It’s been the journey of a lifetime, but I’m grateful for every moment. Getting to know you all over the years has been such an incredible experience. Thank you for all your support ❤️ #BabyOneMoreTime20",
		optionalImg: "",
		comments: 5.4,
		retweets: 25,
		love: 115,
		date: "Nov 14",
		suffix: "K",
		wwTweets: "Tweets"
	});

	const classes = useStyles();
	return (
		<StickyContainer className={classes.stickyCont}>
			<Sticky>{({ style }) => <NavBar style={{ ...style }} />}</Sticky>

			<BannerImg />

			<StatBar />

			<div className={classes.mainContent}>
				<LeftProfileCard />

				<MiddleColumn user={user} />

				<RightSideCards user={user} />
			</div>
		</StickyContainer>
	);
};

export default App;
