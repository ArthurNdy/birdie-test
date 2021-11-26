import React, { useEffect, useState } from "react";
import "../css/TableComponent.css";
import Axios from "axios";

function TableComponent() {
  const [dailyList, setDailyList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/daily").then((response) => {
      setDailyList(response.data);
    });
  }, []);

  return (
    <div className="tableContainer">
      <table className="table customTable">
        <tbody className="tableHeader customHeader">
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Event</th>
          </tr>
        </tbody>
        
        <tbody>
        {dailyList.map((val: any) => (
            <tr>
              <td>{val.timestamp}</td>
              <td>{val.event_type}</td>
            </tr>
            ))};
        </tbody>
        
      </table>
    </div>
  );
}

export default TableComponent;
