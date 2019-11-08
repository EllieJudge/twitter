import React from "react";

function UserInfo(props) {
	return (
		<div style={{ color: props.color, padding: "5px 5px 5px 5px", fontSize: "14px" }}>
			<div>
				{props.icon}
				{props.info}
			</div>
		</div>
	);
}

export default UserInfo;
