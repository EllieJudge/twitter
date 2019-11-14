import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	button: {
		width: 90,
		borderRadius: 100,
		boxShadow: "none",
		cursor: "pointer",
		fontSize: 13,
		fontWeight: "bold",
		lineHeight: "20px",
		position: "relative",
		textAlign: "center",
		margin: "10px 10px 0px 10px"
	}
}));

export default useStyles;
