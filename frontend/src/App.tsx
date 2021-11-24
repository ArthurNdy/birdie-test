import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import date from 'date-and-time';

function App() {

  // const [dataList, setDataList] = useState([]);
  // const [timeList, setTimeList] = useState([]);
  const [dailyList, setDailyList] = useState([]);


  // useEffect(() => {
  //   Axios.get("http://localhost:8000/test").then((response) => {
  //     setDataList(response.data);
  //   });
  // },[]);
  
  // useEffect(() => {
  //   Axios.get("http://localhost:8000/timestamps").then((response) => {
  //     setTimeList(response.data);
  //   });
  // },[]);

  useEffect(() => {
    Axios.get("http://localhost:8000/daily").then((response) => {
      setDailyList(response.data);
    });
  },[]);

  return (
    <>
      <div className="App">
        <h1>Daily events of a patient</h1>

        {/* { timeList.map((val: any) => {          
          const value = date.format((new Date(val.timestamp)),'YYYY/MM/DD HH:mm:ss');
            return <h1>{value}</h1>
          })
        }

        { dataList.map((val: any) => {
            return <h1>{val.id}</h1>
          })
        } */}

      </div>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="right">Event</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dailyList.map((val: any) => (
            <TableRow
              key={val.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {val.timestamp}
              </TableCell>
              <TableCell align="right">{val.event_type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </>
  );
}

export default App;
