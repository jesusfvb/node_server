import express, { Express } from "express";
import { config } from "dotenv";

import { initConnection } from "./config/database";
import routerUser from "./user/router";

config();
initConnection();

const app: Express = express();

app.use(express.json())

// Router
app.use(`${process.env.BASIC_PATH}/user`, routerUser);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
