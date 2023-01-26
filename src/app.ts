import express, { Express } from "express";
import { config } from "dotenv";

import { initConnection } from "./config/database";

config();
initConnection();

const app: Express = express();

app.use(express.json())

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
