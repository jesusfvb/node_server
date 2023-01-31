import express, {Express} from "express";
import {config} from "dotenv";

import {initConnection} from "./config/database";
import routerUser from "./user/router";
import routerSecurity from "./security/router";
import routerCategory from "./category/router";

config();
initConnection();

const vasePath = "/api";

const paths = {
    user: `${vasePath}/user`,
    auth: `${vasePath}/auth`,
    category: `${vasePath}/category`,
};

const app: Express = express();

app.use(express.json());

// Router
app.use(paths.user, routerUser);
app.use(paths.auth, routerSecurity);
app.use(paths.category, routerCategory);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
