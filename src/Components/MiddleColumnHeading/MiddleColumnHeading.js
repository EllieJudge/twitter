import React from "react";
import useStyles from "./styles";

function MiddleColumnHeading() {
  const classes = useStyles();
  return (
    <div className={classes.headContainer}>
      <div className={classes.text} style={{color: "black"}}>Tweets</div>
      <div className={classes.text}>Tweets & replies</div>
      <div className={classes.text}>Media</div>
    </div>
  );
}

export default MiddleColumnHeading;
