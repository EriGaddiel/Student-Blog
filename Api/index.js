import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = 5000

mongoose.connect(process.env.MONGO_URL).then(() => {console.log("Connected to mongoDB")})

app.listen(port, ()=>{
    console.log(`Server is running in port: ${ port }`)
})
