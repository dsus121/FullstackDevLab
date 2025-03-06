import express from 'express';
import cors from 'cors'
import 'dotenv/config'

import router from './routes/postRoutes.js';

import connectDB from './config/connectDB.js'

// import Todo from './models/todoModel.js'

const app = express()

// consistently use the correct variable name for the port
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use('/api/posts', router)


// testing the server   
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log('Churning on port: ', port)
    connectDB()
})

