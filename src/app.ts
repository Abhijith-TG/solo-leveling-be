import express, { type Application, type Request, type Response } from "express"
import userRoute  from "./routes/user.route.js"

const app:Application = express()

app.use(express.json())

app.use("/api/v1",userRoute)


export default app;