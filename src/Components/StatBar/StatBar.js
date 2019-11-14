import Toolbar from "@material-ui/core/Toolbar";
import React, { Fragment } from "react";
import Stat from "./Stat/Stat";
import useStyles from "./styles";
import FollowBtn from "./FollowBtn/FollowBtn";
const britney = require("../../assets/circle-cropped.png");

function StatBar() {
	const classes = useStyles();

	return (
		<Fragment>
			<Toolbar variant="dense" className={classes.toolbarStyles}>
				{<img src={britney} alt="britneyImg" className={classes.britneyImg} />}

				<div className={classes.rightSide}>
					<div className={classes.statContainer}>
						<Stat
							title="Tweets"
							value={Math.floor(Math.random() * 100000)}
							color="#D44A71"
						/>

						<Stat
							title="Following"
							value={Math.floor(Math.random() * 100)}
							suffix="K"
						/>

						<Stat
							title="Followers"
							value={Math.floor(Math.random() * 100000)}
							suffix="M"
						/>

						<Stat title="Likes" value={Math.floor(Math.random() * 1000)} />

						<Stat title="Lists" value={Math.floor(Math.random() * 100)} />
					</div>

					<FollowBtn />
				</div>
			</Toolbar>
		</Fragment>
	);
}

export default StatBar;
