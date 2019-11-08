import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	toolbarStyles: {
		backgroundColor: "white",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		top: "-10px",
		boxShadow: "0 1px 3px 0 rgba(0,0,0,0.25)",
		height: 60
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
		fontWeight: "bold",
		marginLeft: -1,
	},
	rightSide: {
		width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
		// backgroundColor: 'beige',
		marginLeft: 140,
	}
}));

export default useStyles;
