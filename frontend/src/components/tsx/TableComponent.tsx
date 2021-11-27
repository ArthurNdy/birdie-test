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

function CleanDetails(payload_as_text: string) {

  const payload=JSON.parse(payload_as_text)
  return (
    [ 
    " Medication type: ", payload.medication_type,
    " Date for expected dose: ", payload.expected_dose_timestamp,
    " Care giver id: ", payload.caregiver_id,
    " Alert severity: ", payload.alert_severity,
    " Concern severity: ", payload.severity,
    " Note: ", payload.note,
    " Fluid: ", payload.fluid,
    " Observed: " ,payload.observed,
    " Consumed volume (ml): ", payload.consumed_volume_ml,
    " Pad Condition: ", payload.pad_condition,
    " Type: ", payload.type,
    " Rule: ", payload.rrule,
    " Dose: ", payload.dose_size,
    " Medication failure reason: ", payload.medication_failure_reason,
  ]
  );
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
              <td>{CleanDetails(data.payload_as_text)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
