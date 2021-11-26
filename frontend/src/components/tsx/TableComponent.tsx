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
    <div className="tableContainer table-wrapper-scroll-y">
      <table className="table customTable ">
        <thead className="tableHeader customHeader ">
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Event</th>
          </tr>
        </thead>
        
        <tbody>
        {dailyList.map((val: any) => (
            <tr>
              <td>{val.timestamp}</td>
              <td>{val.event_type.replace(/_/g," ")}</td>
            </tr>
            ))};
        </tbody>
        
      </table>
    </div>
  );
}

export default TableComponent;
