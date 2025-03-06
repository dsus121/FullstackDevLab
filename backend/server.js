import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import 'dotenv/config'

// import connectDB from './db.js'

// import Todo from './models/todoModel.js'

const app = express()

// consistently use the correct variable name for the port
const port = process.env.PORT

app.use(express.json())
app.use(cors())

// testing the server   
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log('Churning on port: ', port)
    // connectDB()
})

