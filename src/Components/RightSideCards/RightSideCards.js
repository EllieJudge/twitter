import React from "react";
import useStyles from "./styles";
import LogInSignUpCard from "../LogInSignUpCard/LogInSignUpCard";
import YouMayAlsoLikeCard from "../YouMayAlsoLikeCard/YouMayAlsoLikeCard";
import WWTrendsCard from "../WWTrendsCards/WWTrendsCard";

function RightSideCards() {
  const classes = useStyles();
  return (
    <div className={classes.paperContainer}>
      <LogInSignUpCard />
      <YouMayAlsoLikeCard />
      <WWTrendsCard />
    </div>
  );
}

export default RightSideCards;
