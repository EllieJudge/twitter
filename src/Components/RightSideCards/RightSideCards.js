import React from "react";
import useStyles from "./styles";
import LogInSignUpCard from "../LogInSignUpCard/LogInSignUpCard";
import YouMayAlsoLikeCard from "../YouMayAlsoLikeCard/YouMayAlsoLikeCard";

function RightSideCards() {
	const classes = useStyles();
	return (
		<div className={classes.paperContainer}>
			<LogInSignUpCard />
			<YouMayAlsoLikeCard />
		</div>
	);
}

export default RightSideCards;
