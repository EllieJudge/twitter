import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	paper: {
		backgroundColor: "lightblue",
		width: 257
	},
	header: {
		padding: 5,
		display: "flex",
		alignItems: "center",
		marginLeft: 7
	},
	refresh: {
		color: "hotpink",
		fontSize: 12,
		margin: "0px 0px 4px 5px"
	},
	largeFont: {
		fontSize: "18px",
		lineHeight: "24px",
		marginBottom: "4px",
		fontWeight: "bold"
	},
	smallFont: {
		color: "#657786",
		fontSize: "14px"
	},
	suggestionsCont: {
		display: "flex",
		alignItems: "center",
		marginBottom: 5,
		marginLeft: 10
	},
	suggestionsImgs: {
		borderRadius: "50%",
		width: 48,
		height: 48,
		marginBottom: 4
	},
	textCont: {
		marginLeft: 7
	},
	fullName: {
		fontSize: 16,
		fontWeight: "bold"
	},
	userName: {
		color: "#657786",
		fontSize: 14
	},
	circleIcon: {
		fontSize: "medium",
		color: "#659FEF"
	}
}));

export default useStyles;
