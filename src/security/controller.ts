import {Request, Response} from "express";
import bcryptjs from "bcryptjs";
import {createJwt} from "../helpers/create-jwt";
import User from "../user/model";

export const login = async (
    req: Request<{}, {}, { email: string; password: string }>,
    res: Response
) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if (!user) {
        return res.status(400).json({
            errors: [
                {
                    msg: "User or Password incorrect",
                },
            ],
        });
    }

    if (!bcryptjs.compareSync(password, user.password)) {
        return res.status(400).json({
            errors: [
                {
                    msg: "User or Password incorrect",
                },
            ],
        });
    }

    const token = await createJwt(user.id);

    res.json({
        token,
        user,
    });
};
