import express, {Express} from "express";
import fileUpload from "express-fileupload"
import {config} from "dotenv";

import {initConnection} from "./config/database";

import routerUser from "./user/router";
import routerSecurity from "./security/router";
import routerCategory from "./category/router";
import routerUpload from "./upload/router";

config();
initConnection();

const vasePath = "/api";

const paths = {
    user: `${vasePath}/user`,
    auth: `${vasePath}/auth`,
    category: `${vasePath}/category`,
    upload: `${vasePath}/upload`,
};

const app: Express = express();

app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))

// Router
app.use(paths.user, routerUser);
app.use(paths.auth, routerSecurity);
app.use(paths.category, routerCategory);
app.use(paths.upload, routerUpload);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
