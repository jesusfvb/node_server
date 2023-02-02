import {Router} from "express";

import {upload,list} from "./controller";

const router = Router();

router.get("/",list)

router.post("/", upload)

export default router;