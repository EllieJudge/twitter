import React from "react";
import statStyles from "./styles";

function Stat(props) {
	return (
		<div style={statStyles.cont}>
			<div>{props.title}</div>
			<div style={{ color: props.color, fontSize: "18px", fontWeight: "bold" }}>
				{props.value}
				{props.suffix}
			</div>
		</div>
	);
}

export default Stat;
