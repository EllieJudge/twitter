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
		width: "60%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
    paddingTop: "20px",
    paddingBottom: "20px"
	}
}));

export default useStyles;
