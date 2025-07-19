import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

// Initilaize express
const app=express()

// connect to db
await connectDB()

//  Midlle ware
app.use(cors())
// routes
app.get('/',(req,res)=>res.send("API WORKING "))
app.post('/clerk',express.json(),clerkWebhooks)

// port number
const PORT=process.env.PORT||5000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})