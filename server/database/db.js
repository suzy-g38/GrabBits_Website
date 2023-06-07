// import mongoose from 'mongoose'
// import { Server } from '../utils/config.js'

// const connectDB = async () => {
//   try {
//     console.log(Server.MONGO_URI)
//     mongoose.set('strictQuery', true)
//     const conn = await mongoose.connect('mongodb://127.0.0.1:27017/grabbit', {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       family: 4,
//     })
//     console.log(`MongoDB connected: ${conn.connection.host}`)
//   } catch (error) {
//     console.log(`Error: ${error}`)
//     process.exit(1)
//   }
// }

// export default connectDB

import mongoose from 'mongoose'
// const dotenv = require("dotenv");
// dotenv.config();

const connectDB = () => {
  try {
    mongoose.connect('mongodb://localhost:27017/grabbit', () => {
      console.log('CONNECTED TO MONGO DB DATABASE 🌐')
    })

    console.log(`MongoDB connected: `)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

export default connectDB
