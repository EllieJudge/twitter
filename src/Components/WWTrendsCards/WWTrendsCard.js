import React from "react";
import { Paper } from "@material-ui/core";
import Trend from "./Trend";
import useStyles from "./styles";

function WWTrendsCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.WWTrends}>Worldwide trends</div>

      <Trend title={"#WorldKindnessDay"} tweets={"20.5"} suffix={"K"} />
      <Trend title={"#WednesdayWisdom"} tweets={"22.6"} suffix={"K"} />
      <Trend title={"#IndexFM20"} tweets={"10.5"} suffix={"K"} />
      <Trend title={"#WorldKindnessDay"} tweets={"20.5"} suffix={"K"} />
      <Trend title={"#CM Punk"} tweets={"39.2"} suffix={"K"} />
      <Trend title={"#WednesdayThoughts"} tweets={"14"} suffix={"K"} />
      <Trend title={"#Humpday"} tweets={"20.5"} suffix={"K"} />
      <Trend title={"David Villa"} tweets={"19.5"} suffix={"K"} />
      <Trend title={"Tom Harris"} tweets={"20.5"} suffix={"K"} />
      <Trend title={"#Venice"} tweets={"26.5"} suffix={"K"} />
    </Paper>
  );
}

export default WWTrendsCard;
