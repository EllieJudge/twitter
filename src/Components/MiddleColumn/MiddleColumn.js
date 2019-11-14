import React from "react";
import Paper from "@material-ui/core/Paper";
import MiddleColumnHeading from "../MiddleColumnHeading/MiddleColumnHeading";
import TweetCard from "../TweetCard/TweetCard";
import useStyles from "./styles";

function MiddleColumn(props) {
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<MiddleColumnHeading />
			<TweetCard user={props} />
		</Paper>
	);
}

export default MiddleColumn;
