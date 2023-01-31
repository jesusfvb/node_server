import {Router} from "express";
import {list, save} from "./controller";
import {validationJWT} from "../helpers/validar-jwt";
import validarCampos from "../helpers/validar-campos";
import {body} from "express-validator";

const router = Router();

router.get("/", list)

router.post("/", [validationJWT(), body("name").not().isEmpty(), validarCampos()], save);

export default router;