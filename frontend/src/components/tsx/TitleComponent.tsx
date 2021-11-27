import React from "react";
import "../css/TitleComponent.css";

var patient_name = "Mr X";

interface Props {
  date: string;
}

function TitleComponent(props: Props) {
  return (
    <div className="Title">
      <h1>
        Daily events of a {patient_name} on {props.date}
      </h1>
    </div>
  );
}

export default TitleComponent;
