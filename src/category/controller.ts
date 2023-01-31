import {Request, Response} from "express";

import CategoryModel from "./model";
import {Id} from "../helpers/types";

export const list = async (req: Request, res: Response) => {
    res.json(await CategoryModel.find().populate("usuario","name"));
};

export const save = async (req: Request<{}, {}, { name: string }> & Id, res: Response) => {
    const name = req.body.name.toUpperCase()

    const categoryExist = await CategoryModel.findOne({name})

    if (categoryExist) {
        return res.status(400).json({
            msg: "Ya existe la categoría"
        })
    }

    const category = new CategoryModel({
        name,
        usuario: req.id
    })

    await category.save()

    res.json(category)
};
