import { Router } from "express";
import { list, save } from "./controller";
import { body } from "express-validator";

const router = Router();

router.get("/", list);

router.post(
  "/",
  [
    body("email", "Email is required").isEmail(),
    body("username", "Username is required").not().isEmpty(),
  ],
  save
);
export default router;
