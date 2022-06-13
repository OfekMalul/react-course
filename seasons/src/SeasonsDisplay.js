import React from "react";
import "./SeasonsDisplay.css";

//object that holds the summer and winter text and icon
const seasonConfig = {
  Summer: {
    text: `Let's hit the beach!`,
    iconName: "sun",
    color: "ornage",
  },
  Winter: {
    text: "Brrrr it is chilly",
    iconName: "snowflake",
    color: "lightblue",
  },
};

//checks if it is the summer of winter according the month and location on earth
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat < 0 ? "Winter" : "Summer";
  } else return lat < 0 ? "Summer" : "Winter";
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, props.month);
  const { text, iconName, color } = seasonConfig[season];

  return (
    <div className={`season__display ${season}`}>
      <i className={`massive ${iconName} icon`}></i>
      <h1 className="header">{text}</h1>
      <i className={`massive ${iconName} icon`}></i>
    </div>
  );
};
export default SeasonDisplay;
