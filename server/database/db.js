import mongoose from 'mongoose'
import { Server } from '../utils/config.js'

const connectDB = async () => {
  try {
    console.log(Server.MONGO_URI)
    mongoose.set('strictQuery', true)
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/grabbit', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      family: 4,
    })
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error}`)
    process.exit(1)
  }
}

export default connectDB


