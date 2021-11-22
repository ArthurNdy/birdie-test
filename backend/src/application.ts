import * as express from "express";
// import * as mysql from "mysql";
import { fulldb } from "./controllers/fulldb";
import {pingController} from "./controllers/ping";

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

const app = express();

app.use(pingController); 
app.use(fulldb);

export default app;
