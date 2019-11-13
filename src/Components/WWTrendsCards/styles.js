import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  trendContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    padding: "3px 3px 3px 3px"
  },
  pinkText: {
    color: "#B25473",
    fontSize: 14,
    fontWeight: "bold"
  },
  greyText: {
    color: "#657786",
    fontSize: 12
  },
  paper: {
    backgroundColor: "lightblue",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: 247,
    paddingBottom: "15px",
    paddingLeft: "10px",
    marginBottom: "10px",
    marginTop: 10
  },
  WWTrends: {
    fontSize: "18px",
    lineHeight: "24px",
    marginBottom: "2px",
    fontWeight: "bold",
    marginTop: 10
  }
}));

export default useStyles;
