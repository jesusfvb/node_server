import jwt from "jsonwebtoken";

export const createJwt = (id: string) =>
  new Promise((resolve, reject) => {
    const payload = { id };

    jwt.sign(
      payload,
      process.env.SECRETE_KEY!!,
      {
        expiresIn: "4h",
      },
      (error, token) => {
        if (error) {
          console.log(error);
          reject("Error on generate JWT ");
        } else {
          resolve(token);
        }
      }
    );
  });
