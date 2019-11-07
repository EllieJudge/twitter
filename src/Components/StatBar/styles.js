import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	toolbarStyles: {
		backgroundColor: "white",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: "35px",
		top: "-10px",
		boxShadow: "0 1px 3px 0 rgba(0,0,0,0.25)"
	},
	britneyImg: {
		height: "200px",
		width: "200px",
		border: "5px solid white",
		borderRadius: "50%",
		position: "absolute",
		left: "9%",
		top: "-120px"
	},
	statContainer: {
		color: "#66757F",
		display: "flex",
		fontWeight: "bold"
	}
}));

export default useStyles;
