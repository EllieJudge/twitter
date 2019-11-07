import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		fontSize: "13px",
		fontWeight: "bold"
  },
  inputBase: {
    fontSize: "12px", 
    color: "black" 
  },
  emptyDiv: {
    width: "90px"
  },
  aTag: {
    marginLeft: "19px",
    color: "#66757F",
    fontWeight: "lighter",
    fontSize: "12px"
  },
  arrow: {
    color: "#66757F", margin: "0" 
  },
  aTag2: {
    marginLeft: "5px",
    color: "#66757F",
    marginRight: "0"
  },
  rightSide: {
      width: "100%",
      height: "30px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingRight: "60px" 
  },
	leftSide: {
		display: "flex",
		marginLeft: "60px",
		paddingLeft: "35px",
		alignItems: "center",
		justifyContent: "center"
	},
	twitterIcon: {
		color: "#659FEF",
		marginLeft: "10px",
		marginRight: "5px"
	},
	momentsImg: {
		height: "25px",
		width: "25px",
		marginLeft: "20px",
		marginRight: "5px"
	},
	search: {
		display: "flex",
		justifyContent: "flex-end",
		height: "32px",
		borderRadius: "21px",
		border: "1px solid lightGray",
		backgroundColor: "#F6F8F9",
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto"
		}
	},
	searchIcon: {
		color: "#66757F",
		marginTop: "5px",
		width: theme.spacing(7),
		height: "100%",
		position: "absolute",
		pointerEvents: "none"
	},
	inputInput: {
		padding: "8px 56px 8px 8px",
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: 120,
			"&:focus": {
				width: 200
			}
		}
	},
	inputRoot: {
		marginRight: "2px",
		fontSize: "13px"
	},
	tessssst: {
		color: "#66757F",
		fontSize: "13px",
		fontWeight: "bold",
		display: "flex",
		alignItems: "center"
	},
	momentsTitle: {
		color: "#66757F",
		fontSize: "13px",
		fontWeight: "bold",
		display: "flex",
		alignItems: "center"
	}
}));

export default useStyles;
