import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	profileContainer: {
		backgroundColor: "#E2E6EB",
		display: "flex",
		flexDirection: "column",
		padding: "40px 50px 50px 160px",
    // width: "15%",
	},
	name: {
		fontSize: 21,
		fontWeight: "bold",
		marginRight: 2,
    wordWrap: "break-word",
    padding: '5px 5px 5px 5px'
	},
	blue: {
		color: "#659FEF",
		fontSize: "medium",
		paddingLeft: 4
  },
  nameLink: {
    fontSize: 14,
    color: "#D44A71", 
    paddingLeft: "5px",
    paddingBottom: "7px"
  },
  icon: {
    color: '#66757F',
    fontSize: "medium",
		paddingRight: 5
  }
}));

export default useStyles;