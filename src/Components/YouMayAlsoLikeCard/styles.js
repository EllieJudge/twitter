import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	cardContainer: {
		backgroundColor: "lightblue",
		// display: "flex",
		// flexDirection: "column",
		// alignItems: "center",
    // height: "65%",
    // height: 103, 
    width: 257
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
}));

export default useStyles;