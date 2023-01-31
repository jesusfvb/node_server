import {Router} from "express";
import {login} from "./controller";
import {body} from "express-validator";
import validarCampos from "../helpers/validar-campos";

const router = Router();

router.post(
    "/login",
    [
        body("email", "Email is requerido").isEmail(),
        body("password", "Password is requerido").not().isEmpty(),
        validarCampos(),
    ],
    login
);

export default router;
