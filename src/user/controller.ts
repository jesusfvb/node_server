import { Request, Response } from "express";
import bcryptjs from "bcryptjs";

import UserModel, { User } from "./model";
import { validationResult } from "express-validator";

export const list = async (req: Request, res: Response) => {
  res.json(await UserModel.find());
};

export const save = async (req: Request<{}, {}, User>, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  if (!!(await UserModel.findOne({ email: req.body.email }))) {
    return res.json({
      message: "Email exist",
    });
  }
  if (!!(await UserModel.findOne({ username: req.body.username }))) {
    return res.json({
      message: "Username exist",
    });
  }

  let user = new UserModel(req.body);

  const salt = bcryptjs.genSaltSync(10);
  user.password = bcryptjs.hashSync(user.password, salt);

  await user.save();
  return res.json(user);
};
