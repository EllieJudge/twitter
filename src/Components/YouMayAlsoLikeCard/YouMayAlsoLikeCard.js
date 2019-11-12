import React from "react";
import Suggestions from "./Suggestions";
import useStyles from "./styles";
import Paper from "@material-ui/core/Paper";

function YouMayAlsoLikeCard() {
	const classes = useStyles();
	return (
		<Paper className={classes.cardContainer}>
			<header
				style={{
					padding: 5,
					display: "flex",
					alignItems: "center",
					marginLeft: 7
				}}
			>
				<div className={classes.largeFont}>You may also like ·</div>
				<div style={{ color: "hotpink", fontSize: 12, marginLeft: 5 }}>
					{" "}
					Refresh
				</div>
			</header>

			<Suggestions
				fullName={"Katy Perry"}
				userName={"@katyperry"}
				img={
					"https://pbs.twimg.com/profile_images/1183761016225558529/9zinpiHS_bigger.jpg"
				}
			/>

			<Suggestions
				fullName={"Lady Gaga"}
				userName={"@ladygaga"}
				img={
					"https://pbs.twimg.com/profile_images/1193754634084438016/2UA16ujB_bigger.jpg"
				}
			/>

			<Suggestions
				fullName={"Justin Timberlake"}
				userName={"@jtimberlake"}
				img={
					"https://pbs.twimg.com/profile_images/1046895903095820289/9iU-AMuM_bigger.jpg"
				}
			/>

			<Suggestions
				fullName={"Rihanna"}
				userName={"@rihanna"}
				img={
					"https://pbs.twimg.com/profile_images/1133109643734130688/BwioAwkz_bigger.jpg"
				}
			/>

			<Suggestions
				fullName={"Jennifer Lopez"}
				userName={"@JLo"}
				img={
					"https://pbs.twimg.com/profile_images/1179485003207643136/3Iq4qXFX_bigger.jpg"
				}
			/>
		</Paper>
	);
}

export default YouMayAlsoLikeCard;
