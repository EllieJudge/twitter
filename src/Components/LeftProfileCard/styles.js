import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	container: {
		marginLeft: 20,
		marginRight: 5,
		width: "31%",
		display: "flex",
		flexDirection: "column"
	},
	text: {
		marginLeft: "28%",
		marginTop: "8%"
	},
	name: {
		fontSize: 23,
		fontWeight: "bold",
		marginRight: 2,
		wordWrap: "break-word",
		padding: "5px 5px 5px 5px"
	},
	blue: {
		color: "#659FEF",
		fontSize: "medium",
		paddingLeft: 4
	},
	nameLink: {
		fontSize: 16,
		color: "rgb(101, 119, 134)",
		paddingLeft: "5px",
		paddingBottom: "10px"
	},
	icon: {
		color: "#66757F",
		fontSize: "medium",
		paddingRight: 5
	},
	photoRailContainer: {
		width: 290,
		height: 198,
		marginTop: 5
	},
	photoRailImg: {
		height: 83,
		width: 83,
		borderRadius: 3,
		marginRight: 5,
		marginBottom: 5
	},
	infoCont: {
		padding: "5px 5px 5px 5px",
		fontSize: "14px"
	}
}));

export default useStyles;
