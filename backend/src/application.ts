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
  const data = await sequelize.query("SELECT id, timestamp, event_type, alert_id, care_recipient_id, payload_as_text FROM birdietest.events WHERE DATE_FORMAT(timestamp, '%d/%m/%Y') = '25/04/2019' AND care_recipient_id = 'e3e2bff8-d318-4760-beea-841a75f00227' ORDER BY TIMESTAMP(timestamp)")
  console.log('data', data[0]);
  res.send(data[0]);
});

app.get("/alerts", async(_,res) => {
  const data = await sequelize.query("SELECT id, timestamp, event_type, alert_id, care_recipient_id, payload_as_text FROM birdietest.events WHERE DATE_FORMAT(timestamp, '%d/%m/%Y') = '25/04/2019' AND care_recipient_id = 'e3e2bff8-d318-4760-beea-841a75f00227' AND alert_id IS NOT NULL ORDER BY TIMESTAMP(timestamp)")
  console.log('data', data[0]);
  res.send(data[0]);
});

app.use(pingController); 

export default app;