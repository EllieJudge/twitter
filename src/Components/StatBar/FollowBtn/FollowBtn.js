import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

function FollowBtn() {
	const classes = useStyles();
	return (
		<Button variant="outlined" color="secondary" className={classes.style}>
			Follow
		</Button>
	);
}

export default FollowBtn;
