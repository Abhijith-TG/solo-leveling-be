import { connectDB } from "./db/db.js"
import app from "./app.js"


connectDB().then(()=>{
    app.listen(3000,()=>{
        console.log(`Server running at http://localhost:3000`)
    })
})