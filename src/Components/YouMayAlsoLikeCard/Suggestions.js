import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Suggestions(props) {
	return (
		<div style={{ display: "flex", alignItems: "center", marginBottom: 5, marginLeft: 10 }}>
			<img
				src={props.img}
				alt="face"
				style={{ borderRadius: "50%", width: 48, height: 48 }}
			/>
			<div style={{ marginLeft: 5 }}>
				<div style={{ fontSize: 16, fontWeight: "bold" }}>
					{props.fullName} <CheckCircleIcon style={{fontSize: "medium", color: "#659FEF"}}/>
				</div>
				<div style={{ color: "#657786", fontSize: 14 }}>{props.userName}</div>
			</div>
		</div>
	);
}

export default Suggestions;
