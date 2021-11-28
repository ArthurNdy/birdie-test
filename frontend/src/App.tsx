import React, { useState } from "react";
import TableComponent from "./components/tsx/TableComponent";
import HeaderComponent from "./components/tsx/HeaderComponent";
import TitleComponent from "./components/tsx/TitleComponent";
import "./App.css";
import AlertCardComponent from "./components/tsx/AlertCardComponent";

function App() {
  //State to show the alerts card on button click
  const [showAlerts, setShowAlerts] = useState(false);
  //State to show the date at the top of the main table
  const [date, setDate] = useState("");
  //State to show the nb of alerts on the button
  const [nbAlerts, setNbAlerts] = useState(0);

  var displayCard: string;
  
  if (showAlerts === false) {
    displayCard = "none";
  } else {
    displayCard = "block";
  }

  return (
    <div className="AppContainer">
      <HeaderComponent
        nbAlerts={nbAlerts}
        showAlerts={showAlerts}
        setShowAlerts={setShowAlerts}
      />
      <TitleComponent date={date} />
      <div style={{ display: displayCard }}>
        <AlertCardComponent setNbAlerts={setNbAlerts} />
      </div>
      <div className="AppContent">
        <div className="AppMainTable">
          <TableComponent setDate={setDate} />
        </div>
      </div>
    </div>
  );
}

export default App;
