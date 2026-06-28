import { Router, type NextFunction, type Request, type Response } from "express";
import { CreateUserController, GetUserController } from "../controllers/user.controller.js";

const route = Router()


route.post("/user",CreateUserController)
route.get("/users",GetUserController)


export default route;