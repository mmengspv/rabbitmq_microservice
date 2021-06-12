import express from "express";
import dotenv from "dotenv";
import router from "./router.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`running in http://localhost:${port}`);
});
