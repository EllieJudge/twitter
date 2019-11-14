import React from "react";
import useStyles from "./styles.js";

function BannerImg() {
	const classes = useStyles();
	return (
		<div>
			{
				<img
					src={
						"https://pbs.twimg.com/profile_banners/16409683/1572716203/1500x500"
					}
					alt="backgroundImg"
					className={classes.img}
				></img>
			}
		</div>
	);
}

export default BannerImg;
