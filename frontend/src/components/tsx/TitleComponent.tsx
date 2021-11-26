import React from "react";
import "../css/TitleComponent.css";

var patient_name = "Mr X";
var date = "Date"

function TitleComponent() {
  return (
    <div className="Title">
      <h1>Daily events of a {patient_name} on day {date}</h1>
    </div>
  );
}

export default TitleComponent;
