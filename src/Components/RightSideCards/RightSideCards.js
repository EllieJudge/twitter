import React from "react";
import useStyles from "./styles";
import LogInSignUpCard from "../LogInSignUpCard/LogInSignUpCard";
import YouMayAlsoLikeCard from "../YouMayAlsoLikeCard/YouMayAlsoLikeCard";
import WWTrendsCard from "../WWTrendsCards/WWTrendsCard";

function RightSideCards(props) {
	const classes = useStyles();
	return (
		<div className={classes.paperContainer}>
			<LogInSignUpCard />
			<YouMayAlsoLikeCard />
			<WWTrendsCard user={props.user} />
		</div>
	);
}

export default RightSideCards;
