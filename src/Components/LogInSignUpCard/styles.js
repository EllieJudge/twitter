import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	img: {
		width: "257px",
		height: "103px",
		marginBottom: 8
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
	cardContainer: {
		backgroundColor: "lightblue",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		// height: "50%",
		paddingBottom: "15px",
		marginBottom: "10px"
	}
}));

export default useStyles;
