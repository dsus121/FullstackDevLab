import mongoose from 'mongoose'
import 'dotenv/config'

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGO_URI}/blogDB`)
    console.log(`MongoDB connected`)
  } catch (error) {
    console.log('Error: ', error)
  }}

  export default connectDB 