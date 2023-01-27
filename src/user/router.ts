import { Router } from "express";
import { list, save } from "./controller";
import { body } from "express-validator";
import validarCampos from "../helpers/validar-campos";

const router = Router();

router.get("/", list);

router.post(
  "/",
  [
    body("email", "Email is required").isEmail(),
    body("username", "Username is required").not().isEmpty(),
    validarCampos(),
  ],
  save
);
export default router;
