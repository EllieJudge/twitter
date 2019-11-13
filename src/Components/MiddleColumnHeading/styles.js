import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  headContainer: {
    height: 45,
    borderBottom: "0.5px solid lightgrey",
    // backgroundColor: "lightpink",
    display: "flex",
    flexDirection: "row"
  },
  text: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#D44A71",
    padding: "15px 15px 12px"
  }
}));

export default useStyles;
