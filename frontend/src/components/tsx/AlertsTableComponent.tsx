import React, { useEffect, useState } from "react";
import "../css/AlertsTableComponent.css";
import Axios from "axios";

interface Props {
  setNbAlerts: React.Dispatch<React.SetStateAction<number>>;
}

function CleanTime(date: string) {
  return new Date(date.substring(0, date.length - 1).split("+")[0])
    .toTimeString()
    .split(" ")[0];
}

function AlertsTableComponent(props: Props) {
  const [alertsList, setAlertsList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/alerts").then((response) => {
      console.log(response.data);
      setAlertsList(response.data);
      props.setNbAlerts(response.data.length);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="alertTable" className="tableContainer table-wrapper-scroll-y">
      <table className="table customTable ">
        <thead className="tableHeader customHeader ">
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Alert</th>
            <th scope="col">Details</th>
          </tr>
        </thead>

        <tbody>
          {alertsList.map((data: any) => (
            <tr>
              <td>{CleanTime(data.timestamp)}</td>
              <td>{data.event_type.replace(/_/g, " ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlertsTableComponent;
