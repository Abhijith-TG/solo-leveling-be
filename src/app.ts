import express, { type Application, type Request, type Response } from "express"

const app:Application = express()

app.use(express.json())




export default app;