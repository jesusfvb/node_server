import {Router} from "express";
import {list, save} from "./controller";
import {body} from "express-validator";
import validarCampos from "../helpers/validar-campos";
import {checkEmail, checkUsername} from "./checks";
import {validationJWT} from "../helpers/validar-jwt";

const router = Router();

router.get("/", [validationJWT()], list);

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

export default router;
