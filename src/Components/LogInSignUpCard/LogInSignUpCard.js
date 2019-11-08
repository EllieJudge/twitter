import React, { Fragment } from "react";
import Buttons from "../Buttons/Buttons";
import useStyles from "./styles";
import { Paper } from "@material-ui/core";

function LogInSignUpCard(props) {
	const classes = useStyles();
	return (
		<Fragment>
			<Paper style={{ display: "flex", justifyContent: "center" }}>
				<div className={classes.cardContainer}>
					<img
						src="https://abs.twimg.com/a/1572632388/img/delight/delight_prompt_3.png"
						alt="stockPhoto"
						className={classes.img}
					></img>

					<div className={classes.largeFont}>Want to take advantage of all</div>

					<div className={classes.largeFont}>the new Twitter features?</div>

					<div className={classes.smallFont}>Itʼs simple – just log in.</div>

					<Buttons
						buttonName="Log In"
						backgroundColor="#C46D8B"
						color="white"
					></Buttons>

					<Buttons
						buttonName="Sign Up"
						backgroundColor="blue"
						color="#B94B6F"
					></Buttons>
				</div>
			</Paper>
		</Fragment>
	);
}

export default LogInSignUpCard;
