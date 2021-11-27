import React, { useState } from "react";
import TableComponent from "./components/tsx/TableComponent";
import HeaderComponent from "./components/tsx/HeaderComponent";
import TitleComponent from "./components/tsx/TitleComponent";
import "./App.css";
import AlertCardComponent from "./components/tsx/AlertCardComponent";

function App() {
  
  const [showAlerts, setShowAlerts]=useState(false);
  var displayCard:string;
  if (showAlerts===false){displayCard='none'} else { displayCard='block'};


  return (
    <div className="AppContainer">
      <HeaderComponent showAlerts={showAlerts} setShowAlerts={setShowAlerts} />
      <TitleComponent/>
      <div className="AppContent">
        <div style={{ display : displayCard }}>
          <AlertCardComponent/>
        </div>
        <TableComponent/>
      </div>
    </div>
  );
}

export default App;
