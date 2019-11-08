import React from "react";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";

function Buttons(props) {
	const classes = useStyles();
	return (
		<Button
			style={{ backgroundColor: props.backgroundColor, color: props.color }}
			className={classes.button}
		>
			{props.buttonName}
		</Button>
	);
}

export default Buttons;
