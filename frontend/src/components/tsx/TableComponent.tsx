import React, { useEffect, useState } from "react";
import "../css/TableComponent.css";
import Axios from "axios";

interface Props {
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

function CleanTime(date: string) {
  return new Date(date.substring(0, date.length - 1).split("+")[0])
    .toTimeString()
    .split(" ")[0];
}
function CleanDate(date: string) {
  return new Date(
    date.substring(0, date.length - 1).split("+")[0]
  ).toDateString();
}

function TableComponent(props: Props) {
  const [dailyList, setDailyList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/daily").then((response) => {
      console.log(response.data);
      setDailyList(response.data);
      props.setDate(CleanDate(response.data[0].timestamp));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="tableContainer" className="tableContainer table-wrapper-scroll-y">
      <table className="table customTable ">
        <thead className="tableHeader customHeader ">
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Event</th>
            <th scope="col">Details</th>
          </tr>
        </thead>

        <tbody>
          {dailyList.map((data: any) => (
            <tr>
              <td>{CleanTime(data.timestamp)}</td>
              <td>{data.event_type.replace(/_/g, " ")}</td>
              <td>{data.payload}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
