import React from "react";
import statStyles from "./styles";

function Stat(props) {
	return (
		<div style={statStyles}>
			<div>{props.title}</div>
			<div style={{ color: "#D44A71", fontSize: "18px" }}>{props.value}{props.suffix}</div>
		</div>
	);
}

export default Stat;
