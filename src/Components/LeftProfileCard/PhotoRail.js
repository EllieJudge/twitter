import React from "react";
import useStyles from "./styles";

function PhotoRail() {
	const classes = useStyles();
	const alt = "BritneyImg";
	return (
		<div className={classes.photoRailContainer}>
			<img
				src={"https://pbs.twimg.com/media/EIUGFbbWwAAC5cb.jpg"}
				alt={alt}
				className={classes.photoRailImg}
			/>

			<img
				src={"https://pbs.twimg.com/media/ECnq4iKUYAA4UoE.jpg"}
				alt={alt}
				className={classes.photoRailImg}
			/>

			<img
				src={"https://pbs.twimg.com/media/ECnq4iNUYAITbRL.jpg"}
				alt={alt}
				className={classes.photoRailImg}
			/>

			<img
				src={"https://pbs.twimg.com/media/D5rvsF3U0AAgTZu.jpg"}
				alt={alt}
				className={classes.photoRailImg}
			/>

			<img
				src={"https://pbs.twimg.com/media/D5rvsF3U0AAgTZu.jpg"}
				alt={alt}
				className={classes.photoRailImg}
			/>

			<img
				src={"https://pbs.twimg.com/media/D5rvsF7UUAIvyJX.jpg"}
				alt={alt}
				className={classes.photoRailImg}
			/>
		</div>
	);
}

export default PhotoRail;
