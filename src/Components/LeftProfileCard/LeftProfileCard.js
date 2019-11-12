import React, { Fragment } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import useStyles from "./styles";
import UserInfo from "./UserInfo";
import PhotoRail from "./PhotoRail";

function LeftProfileCard() {
	const classes = useStyles();
	return (
		<Fragment>
			<div
				style={{
					marginLeft: 20,
					marginRight: 5,
					width: "31%",
					display: "flex",
					flexDirection: "column"
				}}
			>
				<div className={classes.text}>
					<div className={classes.name}>
						Britney Spears
						<CheckCircleIcon className={classes.blue} />
					</div>
					<div className={classes.nameLink}>@britneyspears</div>

					<UserInfo
						icon={<LocationOnIcon className={classes.icon} />}
						info="Los Angeles, CA"
						color="#657786"
					/>

					<UserInfo
						icon={<LinkIcon className={classes.icon} />}
						info="britneythezone.com"
						color="#D44A71"
					/>

					<UserInfo
						icon={<DateRangeIcon className={classes.icon} />}
						info="Joined September 2008"
						color="#657786"
					/>

					<UserInfo
						icon={
							<PhotoSizeSelectActualIcon
								className={classes.icon}
								style={{ marginTop: "10px" }}
							/>
						}
						color="#D44A71"
						info="1,323 Photos and videos"
					/>
				<PhotoRail />
				</div>
			</div>
		</Fragment>
	);
}

export default LeftProfileCard;