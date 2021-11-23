import React, { useEffect } from 'react';
import './App.css';
import Axios from "axios";

function App() {


  useEffect(() => {
    
    Axios.get("http://localhost:8000/test").then((response) => {
      console.log("Data Fetched !", response)
    })
  },[]);

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
