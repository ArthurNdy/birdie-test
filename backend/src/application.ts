import * as express from "express";
import { QueryTypes, Sequelize } from 'sequelize';
import {pingController} from "./controllers/ping";
import cors = require("cors");

//declare database credentials
const sequelize = new Sequelize('birdietest', 'test-read', 'xnxPp6QfZbCYkY8', {
    host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
    dialect: 'mysql'
});

// IIFE
(async() => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
})();

const app = express();

app.use(cors());

app.get("/test", async(_, res) => {
    const data = await sequelize.query("SELECT id FROM birdietest.events WHERE event_type = 'task_completed' AND  caregiver_id = '5c9090ab-7d5e-4a72-8bf7-197190ad4c98' AND task_instance_id = 'dHxmMjU2YmFlYS1jODEyLTRjZWMtOTUxNC0wYzc5YjNjZmQwMzN8MjAxOS0wNS0xMlQwNzowMDowMC4wMDBafE1PUk5JTkc=' ", { type: QueryTypes.SELECT });
    console.log('data', data);
    res.send(data);
});

app.get("/care_recipients", async(_, res) => {
  const data = await sequelize.query("SELECT care_recipient_id FROM birdietest.events GROUP BY  care_recipient_id ", { type: QueryTypes.SELECT });
  console.log('data', data);
  res.send(data);
});

app.get("/timestamps", async(_, res) => {
  const data = await sequelize.query("SELECT timestamp FROM birdietest.events WHERE event_type = 'task_completed' AND  caregiver_id = '5c9090ab-7d5e-4a72-8bf7-197190ad4c98' AND task_instance_id = 'dHxmMjU2YmFlYS1jODEyLTRjZWMtOTUxNC0wYzc5YjNjZmQwMzN8MjAxOS0wNS0xMlQwNzowMDowMC4wMDBafE1PUk5JTkc=' ", { type: QueryTypes.SELECT });
  console.log('data', data);
  res.send(data);
});

app.get("/daily", async(_,res) => {
  const data = await sequelize.query("SELECT id, timestamp, event_type FROM birdietest.events WHERE DATE_FORMAT(timestamp, '%d/%m/%Y') = '23/04/2019' AND care_recipient_id = 'ad3512a6-91b1-4d7d-a005-6f8764dd0111' ORDER BY TIMESTAMP(timestamp)")
  console.log('data', data[0]);
  res.send(data[0]);
});

app.use(pingController); 

export default app;

// import * as mysql from "mysql";
// import { fulldb } from "./controllers/fulldb";

// const event = sequelize.define("event", {
//     payload:{
//         type: DataTypes.JSON,
//     },
//     alert_id:{
//         type: DataTypes.CHAR,
//     },
//     task_instance_id:{
//         type: DataTypes.CHAR,
//     },
//     visit_id:{
//         type: DataTypes.CHAR,
//     },
//     caregiver_id:{
//         type: DataTypes.CHAR,
//     },
//     payload_as_text:{
//         type: DataTypes.TEXT,
//     },
//     rejected_event_id:{
//         type: DataTypes.CHAR,
//     },
//     observation_event_id:{
//         type: DataTypes.CHAR,
//     },
//     timestamp:{
//         type: DataTypes.CHAR,
//     },
//     id:{
//         type: DataTypes.CHAR,
//         primaryKey: true,
//     },
//     event_type:{
//         type: DataTypes.CHAR,
//     },
//     care_recipient_id:{
//         type: DataTypes.CHAR,
//     }
// });

///////////////////

// // Create db connection
// const db = mysql.createConnection({
//     host : 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
//     // port: '3306',
//     user: 'test-read',
//     password: 'xnxPp6QfzbCYkY8',
//     database: 'birdietest',
//     // table: 'events',
// });

// // db Connection

// db.connect(() => {

//     console.log("MySql connection is a success !")

// });