import React, { useState } from "react";
import TableComponent from "./components/tsx/TableComponent";
import HeaderComponent from "./components/tsx/HeaderComponent";
import TitleComponent from "./components/tsx/TitleComponent";
import "./App.css";
import AlertCardComponent from "./components/tsx/AlertCardComponent";

function App() {
  const [showAlerts, setShowAlerts] = useState(false);
  const [date, setDate] = useState("");
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
