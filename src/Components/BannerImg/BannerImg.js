import React, { Component } from "react";
import styles from './styles.js'
const image = require("./theZone.png");


class BannerImg extends Component {

	// const styles = {
	// 	img: {
	// 		marginTop: "49px",
	// 		width: "100%",
	// 		height: "380px",
	// 		zIndex: "-1"
	// 	}
	// }
	render() {
		return (
			<div>
				{
					<img
						src={image}
						alt="backgroundImg"
						style={{ marginTop: "49px", width: "100%", height: "380px", zIndex: "-1"}}
					></img>
				}
			</div>
		);
	}
}

export default BannerImg;
