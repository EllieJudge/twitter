import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	paperContainer: {
		display: "flex",
		justifyContent: "start",
		alignContent: "flex-start",
		flexWrap:"wrap",
		// flexDirection: "column",
		width: "31%",
		marginLeft: 5,
		marginRight: 20,
		backgroundColor: "inherit",
	}
}));

export default useStyles;
