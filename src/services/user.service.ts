import { User } from "../models/users.model.js"



export const createUserService =  async (username:string, password:string, email:string)=>{

    const user = await User.findOne({email})

    if(user){
        throw new Error("User with email already exists!")
    }

    try{
        await User.create({username,password,email,level:1})
        return {status:true, message:"User created successfully"}
    }catch(error: any)
    {
        throw new Error("Failed to create user !")
    }

}