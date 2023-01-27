import UserModel from "./model";

export const checkEmail = () => {
  return async (email: string) => {
    if (!!(await UserModel.findOne({ email }))) {
      throw new Error("Email exist");
    }
  };
};
export const checkUsername = () => {
  return async (username: string) => {
    if (!!(await UserModel.findOne({ username }))) {
      throw new Error("Username exist");
    }
  };
};
