import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import useStyles from "./styles";

function Suggestions(props) {
	const classes = useStyles();
	return (
		<div className={classes.suggestionsCont}>
			<img src={props.img} alt="face" className={classes.suggestionsImgs} />
			<div className={classes.textCont}>
				<div className={classes.fullName}>
					{props.fullName} <CheckCircleIcon className={classes.circleIcon} />
				</div>
				<div className={classes.userName}>{props.userName}</div>
			</div>
		</div>
	);
}

export default Suggestions;
