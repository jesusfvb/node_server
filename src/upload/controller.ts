import {Request, Response} from "express";
import path from "path";
import {UploadedFile} from "express-fileupload";

export const list = (req: Request, res: Response) => {
    const imgPath = path.join(__dirname + "../../../uploads/foto.png");
    res.sendfile(imgPath)
};


export const upload = async (req: Request, res: Response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.files) {
        return res.status(400).json({
            message: "No files were uploaded"
        });
    }

    const {files} = req.files
    if (typeof files === "object") {
        const file = files as UploadedFile
        const extension = file.name.split(".").pop()

        if(extension !== "png"){
            return res.status(400).json({
                msg: `Solo se permite formato png`,
            })
        }

        const finalName = "foto." + extension

        const uploadPath = path.join(__dirname + "../../../uploads/" + finalName);
        (file).mv(uploadPath, (err) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    msg: `Error server`,
                })
            }
        })
        res.json({
            msg: `Upload file to ${uploadPath}`,
        })

    } else {
        res.json({
            msg: `Upload file`,
        })
    }
}
