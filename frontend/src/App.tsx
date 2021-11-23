import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios";



function App() {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/test").then((response) => {
      setDataList(response.data);
    });
  },[]);

  return (
    <div className="App">
      <h1>Hello</h1>

      { dataList.map((val: any) => {
          return <h1>{val.id}</h1>
        })
      }

    </div>
  );
}

export default App;
