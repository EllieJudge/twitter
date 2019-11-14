import React from "react";
import useStyles from "./styles";

function UserInfo(props) {
	const classes = useStyles();
	return (
		<div className={classes.infoCont} style={{ color: props.color }}>
			<div>
				{props.icon}
				{props.info}
			</div>
		</div>
	);
}

export default UserInfo;
