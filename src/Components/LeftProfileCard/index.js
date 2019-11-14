import React, { Fragment } from "react";
import {
	CheckCircle,
	LocationOn,
	Link,
	DateRange,
	PhotoSizeSelectActual
} from "@material-ui/icons";
import useStyles from "./styles";
import UserInfo from "./UserInfo";
import PhotoRail from "./PhotoRail";

function LeftProfileCard() {
	const classes = useStyles();
	return (
		<Fragment>
			<div className={classes.container}>
				<div className={classes.text}>
					<div className={classes.name}>
						Britney Spears
						<CheckCircle className={classes.blue} />
					</div>
					<div className={classes.nameLink}>@britneyspears</div>

					<UserInfo
						icon={<LocationOn className={classes.icon} />}
						info="Los Angeles, CA"
						color="#657786"
					/>

					<UserInfo
						icon={<Link className={classes.icon} />}
						info="britneythezone.com"
						color="#D44A71"
					/>

					<UserInfo
						icon={<DateRange className={classes.icon} />}
						info="Joined September 2008"
						color="#657786"
					/>

					<UserInfo
						icon={
							<PhotoSizeSelectActual
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
