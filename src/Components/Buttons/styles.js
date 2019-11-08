import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	button: {
    // maxWidth: 400,
    width: "90px",
		borderRadius: "100px",
		boxShadow: "none",
		cursor: "pointer",
		fontSize: "13px",
		fontWeight: "bold",
		lineHeight: "20px",
		padding: "6px 16px",
		position: "relative",
    textAlign: "center",
    margin: "10px 10px 0px 10px"
	}
}));

export default useStyles;
