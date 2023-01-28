import { Router } from "express";
import { list, save, update } from "./controller";
import { body } from "express-validator";
import validarCampos from "../helpers/validar-campos";
import { checkEmail, checkUsername } from "./checks";

const router = Router();

router.get("/", list);

router.post(
  "/",
  [
    body("email", "Email is required").isEmail(),
    body("username", "Username is required").not().isEmpty(),
    body("email").custom(checkEmail()),
    body("username").custom(checkUsername()),
    validarCampos(),
  ],
  save
);

router.put("/", [], update);
export default router;
