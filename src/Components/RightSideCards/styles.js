import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	paperContainer: {
		display: "flex",
		justifyContent: "start",
		width: "31%",
		marginLeft: 5,
		marginRight: 20,
		// marginBottom: 5,
		backgroundColor: "inherit",
		flexWrap:"wrap",
		alignContent: "flex-start",
	}
}));

export default useStyles;
