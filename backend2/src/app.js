import express from "express";
import dotenv from "dotenv";
import router from "./router.js";
import connectRabbitMQ from './receive.js'
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  connectRabbitMQ()
  console.log(`running in http://localhost:${port}`);
});
