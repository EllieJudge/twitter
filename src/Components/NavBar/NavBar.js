import React from "react";
import { AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
import { Twitter, Search, ArrowDropDownSharp } from "@material-ui/icons";
import useStyles from "./styles";
const logo = require("../../assets/twitterLightning.png");

export default function DenseAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="fixed" style={{ backgroundColor: "white" }}>
				<Toolbar variant="dense">
					<div className={classes.leftSide}>
						<Typography className={classes.tessssst}>
							<Twitter className={classes.twitterIcon} />
							Home
						</Typography>

						<Typography className={classes.momentsTitle}>
							<img src={logo} alt="Icon" className={classes.momentImg} />
							Moments
						</Typography>
					</div>

					<div className={classes.rightSide}>
						<div className={classes.search}>
							<InputBase
								placeholder="Search Twitter"
								className={classes.inputBase}
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
								inputProps={{ "aria-label": "search" }}
							/>
							<div className={classes.searchIcon}>
								<Search />
							</div>
						</div>
						<a href className={classes.aTag}>
							Have an account?
						</a>
						<a href className={classes.aTag2}>
							Log in.{" "}
						</a>
						<ArrowDropDownSharp className={classes.arrow} />
						<div className={classes.emptyDiv}></div>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
