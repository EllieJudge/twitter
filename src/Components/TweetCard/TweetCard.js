import React from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";
import {
	CheckCircle,
	ExpandMore,
	ModeComment,
	Repeat,
	FavoriteBorder
} from "@material-ui/icons";

function TweetCard(props) {
	const classes = useStyles();
	console.log("Props from TweetCard!", props);
	const {
		fullName,
		userName,
		date,
		avatar,
		tweet,
		optionalImg,
		comments,
		retweets,
		love,
		suffix
	} = props.user.user;
	return (
		<div>
			<Paper className={classes.paper}>
				<img src={avatar} alt="userPic" className={classes.avatar} />

				<div className={classes.textCont}>
					<div className={classes.userInfoCont}>
						<div className={classes.authorInfo}>
							<div className={classes.fullName}>{fullName}</div>
							<CheckCircle className={classes.blueTick} />
							<div className={classes.userName}>
								{userName} * {date}
							</div>
						</div>
						<ExpandMore className={classes.expandIcon} />
					</div>
					<div className={classes.tweet}>{tweet}</div>
					<div>{optionalImg}</div>

					<div className={classes.iconsCont}>
						<div>
							<ModeComment className={classes.icons} />
							{comments}
							{suffix}
						</div>

						<div>
							<Repeat className={classes.icons} />
							{retweets}
							{suffix}
						</div>

						<div>
							<FavoriteBorder className={classes.icons} />
							{love}
							{suffix}
						</div>
					</div>
				</div>
			</Paper>
		</div>
	);
}

export default TweetCard;
