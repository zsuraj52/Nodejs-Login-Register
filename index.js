import express from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import router from "./src/Routes/userService.js";
import('./database/dbconfig.js')
const app = express();

app.use(bodyParser.json());
app.use(router)
let port = process.env.port || 3000;

app.listen((port), () => {
    console.log(`Server is Running on port ${port}`);
})