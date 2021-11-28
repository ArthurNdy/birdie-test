import * as express from "express";
import { Sequelize } from 'sequelize';
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

//get data for the daily events of a patient
app.get("/daily", async(_,res) => {
  const data = await sequelize.query("SELECT id, timestamp, event_type, alert_id, care_recipient_id, payload_as_text FROM birdietest.events WHERE DATE_FORMAT(timestamp, '%d/%m/%Y') = '10/05/2019' AND care_recipient_id = 'df50cac5-293c-490d-a06c-ee26796f850d' AND event_type != 'task_completed' ORDER BY TIMESTAMP(timestamp)")
  console.log('data', data[0]);
  res.send(data[0]);
});

//get data for the daily ESSENTIAL events of a patient
app.get("/alerts", async(_,res) => {
  const data = await sequelize.query("SELECT id, timestamp, event_type, alert_id, care_recipient_id, payload_as_text FROM birdietest.events WHERE DATE_FORMAT(timestamp, '%d/%m/%Y') = '10/05/2019' AND care_recipient_id = 'df50cac5-293c-490d-a06c-ee26796f850d' AND (event_type='general_observation' OR event_type='mood_observation' OR event_type='alert_qualified') ORDER BY TIMESTAMP(timestamp)")
  console.log('data', data[0]);
  res.send(data[0]);
});

export default app;