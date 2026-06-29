import { User } from "../models/users.model.js";
import bcrypt from "bcrypt";

export const createUserService = async (
  username: string,
  password: string,
  email: string,
) => {
  try {
    const user = await User.findOne({ email });

    if (user) {
      throw new Error("User with email already exists!");
    }

    const encryptedPass = await bcrypt.hash(password, 10);
    await User.create({ username, password: encryptedPass, email, level: 1 });
    return { status: true, message: "User created successfully" };
  } catch (error: any) {
    throw new Error(error || "Failed to create user !");
  }
};

export const getAllUsers = async ()=>{
  try{
    const users = await User.find()
    return users;
  }catch(e:any){
    throw new Error(e) 
  }
}
