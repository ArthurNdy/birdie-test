import React from "react";
import "../css/AlertCardComponent.css";
import AlertsTableComponent from "./AlertsTableComponent";

interface Props {
  setNbAlerts: React.Dispatch<React.SetStateAction<number>>;
}

function AlertCardComponent(props: Props) {
  return (
    <div className="card">
      <h1 className="card-title">Alerts</h1>
      <div className="card-body">
        <AlertsTableComponent setNbAlerts={props.setNbAlerts} />
      </div>
    </div>
  );
}

export default AlertCardComponent;
