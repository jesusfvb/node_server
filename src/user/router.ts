import { Router } from "express";
import { list, save } from "./controller";

const router = Router();

router.get("/", list);

router.post("/", save);
export default router;
