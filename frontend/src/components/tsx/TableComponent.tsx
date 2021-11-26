import React, { useEffect, useState } from "react";
import "../css/TableComponent.css";
import Axios from "axios";


function CleanTime(date: string){
    return(
        new Date(date.substring(0, date.length - 1).split("+")[0]).toTimeString().split(" ")[0]
    );
}

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
              <td>{CleanTime(val.timestamp)}</td>
              <td>{val.timestamp}</td>
              <td>{val.event_type.replace(/_/g," ")}</td>
            </tr>
            ))}
        </tbody>
        
      </table>
    </div>
  );
}

export default TableComponent;
