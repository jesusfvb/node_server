import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Id } from "./types";

export const validationJWT = () => {
  return (req: Request & Id, res: Response, next: NextFunction) => {
    try {
      const token = req.header("Token") as string | undefined;

      if (!token) {
        return res.status(401).json({
          errors: {
            msg: "No token present",
          },
        });
      }

      const { id } = jwt.verify(
        token!,
        process.env.SECRETE_KEY!
      ) as JwtPayload & Id;

      req.id = id;

      next();
    } catch (error) {
      return res.status(401).json({
        errors: {
          msg: "Token not valid",
        },
      });
    }
  };
};
