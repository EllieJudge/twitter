import React from "react";
import useStyles from "./styles";

function Trend(props) {
  const classes = useStyles();
  return (
    <div className={classes.trendContainer}>
      <div className={classes.pinkText}>{props.title}</div>
      <div className={classes.greyText}>
        {props.tweets}
        {props.suffix} Tweets
      </div>
    </div>
  );
}

export default Trend;
