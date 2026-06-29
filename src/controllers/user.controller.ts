import type { Request, Response } from "express";
import { createUserService, getAllUsers } from "../services/user.service.js";
import { User } from "../models/users.model.js";



export const CreateUserController= async ( req:Request,res:Response )=>{

    try{
        const {username,password,email} = req.body;

        if(!username || !password || !email){
            res.status(400).send("Username, Password, Email are required")
        }

        const response = await createUserService(username,password,email);
        res.status(201).send("Successfully created user!")


    }catch(error:any){
        res.status(500).send(error || "Failed to create user")
    }

}

export const GetUserController= async ( req:Request,res:Response )=>{

    try{
        const users = await getAllUsers();
        res.send(users)


    }catch(error:any){
        res.status(500).send(error || "Failed to create user")
    }

}