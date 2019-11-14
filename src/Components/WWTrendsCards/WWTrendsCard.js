import React from "react";
import { Paper } from "@material-ui/core";
import Trend from "./Trend";
import useStyles from "./styles";

function WWTrendsCard(props) {
	const classes = useStyles();
	const { wwTweets } = props.user;
	return (
		<Paper className={classes.paper}>
			<div className={classes.WWTrends}>Worldwide trends</div>

			<Trend
				title={"#WorldKindnessDay"}
				tweets={"20.5"}
				suffix={"K"}
				wwTweets={wwTweets}
			/>
			<Trend
				title={"#WednesdayWisdom"}
				tweets={"22.6"}
				suffix={"K"}
				wwTweets={props.user.wwTweets}
			/>
			<Trend title={"#IndexFM20"} tweets={""} suffix={""} wwTweets={""} />
			<Trend
				title={"#WorldKindnessDay"}
				tweets={"20.5"}
				suffix={"K"}
				wwTweets={wwTweets}
			/>
			<Trend
				title={"#CM Punk"}
				tweets={"39.2"}
				suffix={"K"}
				wwTweets={props.user.wwTweets}
			/>
			<Trend
				title={"#WednesdayThoughts"}
				tweets={"14"}
				suffix={"K"}
				wwTweets={wwTweets}
			/>
			<Trend
				title={"#Humpday"}
				tweets={"20.5"}
				suffix={"K"}
				wwTweets={wwTweets}
			/>
			<Trend
				title={"David Villa"}
				tweets={"19.5"}
				suffix={"K"}
				wwTweets={wwTweets}
			/>
			<Trend
				title={"Tom Harris"}
				tweets={"20.5"}
				suffix={"K"}
				wwTweets={wwTweets}
			/>
			<Trend
				title={"#Venice"}
				tweets={"26.5"}
				suffix={"K"}
				wwTweets={wwTweets}
			/>
		</Paper>
	);
}

export default WWTrendsCard;
