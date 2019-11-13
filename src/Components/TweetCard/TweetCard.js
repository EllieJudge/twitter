import React from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

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
		love
	} = props.user.user;
	return (
		<div>
			<Paper style={{ backgroundColor: "pink", display: "flex", padding: 7 }}>
				<img
					src={avatar}
					alt="userPic"
					style={{ height: 48, width: 48, borderRadius: 50, padding: 5 }}
				/>

				<div className={classes.textCont}>
					<div className={classes.userInfoCont}>
						<div className={classes.authorInfo}>
							<div className={classes.fullName}>{fullName}</div>
							<CheckCircleIcon className={classes.blueTick} />
							<div className={classes.userName}>
								{userName} * {date}
							</div>
						</div>
						<ExpandMoreIcon className={classes.expandIcon} />
					</div>
					<div className={classes.tweet}>{tweet}</div>
					<div>{optionalImg}</div>

					<div className={classes.iconsCont}>
						<div>
							<ModeCommentIcon className={classes.icons} />
							{comments}K
						</div>

						<div>
							<RepeatIcon className={classes.icons} />
							{retweets}K
						</div>

						<div>
							<FavoriteBorderIcon className={classes.icons} />
							{love}K
						</div>
					</div>
				</div>
			</Paper>
			{
				//rowOne
				//avatar
				//fullName
				//blueTick
				//userName
				//dateOfTweet
				//arrowDownIcon
				//rowTwo
				//tweetText
				//optionalImage
				//rowThree
				//dialogueIcon
				//number //suffix
				//retweetIcon
				//number //suffix
				//loveheartIcon
				//number //suffix
				//rowFour
				//showThisThread
			}
		</div>
	);
}

export default TweetCard;
