import React, { useEffect, useState } from "react";
import "../css/AlertsTableComponent.css";
import Axios from "axios";

interface Props {
  setNbAlerts: React.Dispatch<React.SetStateAction<number>>;
}

//Clean the full date from the sql table to deliver the time 
function CleanTime(date: string) {
  return new Date(date.substring(0, date.length - 1).split("+")[0])
    .toTimeString()
    .split(" ")[0];
}

//Clean the payload data from the sql table to deliver the essential details 
function CleanDetails(payload_as_text: string) {
  const payload=JSON.parse(payload_as_text)
  const payload_ls=[ 
    [" Medication type: ", payload.medication_type],
    [" Date for expected dose: ", payload.expected_dose_timestamp],
    [" Alert severity: ", payload.alert_severity],
    [" Concern severity: ", payload.severity],
    [" Note: ", payload.note],
    [" Fluid: ", payload.fluid],
    [" Observed: " ,payload.observed],
    [" Consumed volume (ml): ", payload.consumed_volume_ml],
    [" Pad Condition: ", payload.pad_condition],
    [" Type: ", payload.type],
    [" Rule: ", payload.rrule],
    [" Dose: ", payload.dose_size],
    [" Medication failure reason: ", payload.medication_failure_reason],
    [" Mood: ", payload.mood]
  ]
  

  let valid_details="";
  for (let i in payload_ls) {
    //Going through all possible details to show only the ones with an input  
    if (payload_ls[i][1] !== undefined){
      valid_details += payload_ls[i][0]+payload_ls[i][1]
    }
  }
  
  return (
    //Returns the details for each event
    valid_details
  );
}

function AlertsTableComponent(props: Props) {
  const [alertsList, setAlertsList] = useState([]);

  useEffect(() => {
    //List of the events of a patient for one day
    Axios.get("http://localhost:8000/alerts").then((response) => {
      //Set list of the ESSENTIAL events of a patient for one day
      setAlertsList(response.data);
      //Set the nb of alerts to be shown on the button
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
            <th scope="col">Event</th>
            <th scope="col">Details</th>
          </tr>
        </thead>

        <tbody>
          {alertsList.map((data: any) => (
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

export default AlertsTableComponent;
