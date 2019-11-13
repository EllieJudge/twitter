import React from "react";
import Paper from "@material-ui/core/Paper";
import MiddleColumnHeading from "../MiddleColumnHeading/MiddleColumnHeading";
import TweetCard from "../TweetCard/TweetCard";

function MiddleColumn(props) {
  return (
    <Paper style={{ width: "45%", marginLeft: 5, marginRight: 5 }}>
      <MiddleColumnHeading />
      <TweetCard user={props} />
    </Paper>
  );
}

export default MiddleColumn;
