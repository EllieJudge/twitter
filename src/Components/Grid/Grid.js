import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LeftProfileCard from "../LeftProfileCard/LeftProfileCard";
import LogInSignUpCard from '../LogInSignUpCard/LogInSignUpCard';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		paddingTop: "10px"
	},
	paper: {
		height: 500,
		width: 450
	},
	control: {
		padding: theme.spacing(2)
	}
}));

export default function SpacingGrid() {
	const [spacing] = React.useState(2);
	const classes = useStyles();

	return (
		<Grid container className={classes.root} spacing={2}>
			<Grid item xs={12}>
				<Grid container justify="center" spacing={spacing}>
					<Grid item>
						<Paper className={classes.paper}>
							<LeftProfileCard />
						</Paper>
					</Grid>
					<Grid item>
						<Paper className={classes.paper} />
					</Grid>
					<Grid item>
						<Paper className={classes.paper}>
            <LogInSignUpCard />
            </Paper>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
