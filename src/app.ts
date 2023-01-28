import express, { Express } from "express";
import { config } from "dotenv";

import { initConnection } from "./config/database";
import routerUser from "./user/router";
import routerSecurity from "./security/router";

config();
initConnection();

const app: Express = express();

app.use(express.json());

// Router
app.use(`${process.env.BASIC_PATH}/user`, routerUser);
app.use(`${process.env.BASIC_PATH}/auth`, routerSecurity);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
