import React from "react";
import TableComponent from "./components/tsx/TableComponent";
import HeaderComponent from "./components/tsx/HeaderComponent";
import TitleComponent from "./components/tsx/TitleComponent";
import "./App.css";
import AlertCardComponent from "./components/tsx/AlertCardComponent";

function App() {
  
  return (
    <div className="AppContainer">
      <HeaderComponent/>
      <TitleComponent/>
      <div className="AppContent">
        <AlertCardComponent/>
        <TableComponent/>
      </div>
    </div>
  );
}

export default App;
