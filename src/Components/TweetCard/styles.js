import { makeStyles } from "@material-ui/core/styles";

const gray = "#657786";
const tickBlue = "#659FEF";

const useStyles = makeStyles(() => ({
	userInfoCont: {
		display: "flex",
		justifyContent: "space-between"
	},
	authorInfo: {
		display: "flex"
	},
	fullName: {
		fontSize: 15,
		fontWeight: "bold",
		padding: "5px 5px 5px 5px"
	},
	blueTick: {
		color: tickBlue,
		fontSize: "medium",
		paddingLeft: 4,
		padding: "5px 0px 5px 0px"
	},
	userName: {
		fontSize: 14,
		color: gray,
		padding: "5px 5px 5px 5px"
	},
	expandIcon: {
		color: gray,
		fontSize: "large",
		marginRight: 20,
		padding: "5px 5px 5px 5px"
	},
	tweet: {
		fontSize: 14,
		fontFamily: "inherit",
		color: "black",
		padding: "0px 36px 0px 5px"
	},
	iconsCont: {
		display: "flex",
		color: gray,
		fontSize: "12px",
		fontWeight: "bold",
		padding: 6,
		justifyContent: "space-between",
		width: "37%",
		marginBottom: 5
	},
	icons: {
		fontSize: "inherit",
		marginRight: 5
	},
	imgCont: {
		height: "100%",
		backgroundColor: "aqua"
	},
	paper: {
		backgroundColor: "pink",
		display: "flex",
		padding: 7,
		borderRadius: 0
	},
	avatar: {
		height: 48,
		width: 48,
		borderRadius: 50,
		padding: 5
	}
}));

export default useStyles;
