import * as express from "express";
import { Sequelize } from 'sequelize';

export const fulldb = express.Router();


const sequelize = new Sequelize('birdietest', 'test-read', 'xnxPp6QfZbCYkY8', {
    host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
    dialect: 'mysql'
});

(async() => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
})();

// fulldb.get('/fulldb', (_, res) => {
//     console.log(res);
// });

// fulldb.get('/fulldb', (_, res) => {
//     let sql = 'SELECT * FROM birdietest.events WHERE event_type = "task_completed" AND caregiver_id = "5c9090ab-7d5e-4a72-8bf7-197190ad4c98" AND task_instance_id = "dHxmMjU2YmFlYS1jODEyLTRjZWMtOTUxNC0wYzc5YjNjZmQwMzN8MjAxOS0wNS0xMlQwNzowMDowMC4wMDBafE1PUk5JTkc="'
//     db.query(sql, (_, results) => {
//         callback((results != undefined) ? console.log(results) : "");
//         res.send('Posts fetched...');
//     }); 
// });

// function callback(_arg0: string | void) {
//     throw new Error("Function not implemented.");
// }
