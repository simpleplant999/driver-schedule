import express, { Express } from 'express'
import mongoose from 'mongoose'
import driverScheduleRouter from './routes/driver-schedules'
import cors from 'cors'
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors())

const mongoURI: string =  "mongodb+srv://ydriveappdb:BV1J0ow6mlLq8fPy@driverschedule.fxave.mongodb.net/";

mongoose.connect(mongoURI).then(()=>{
  console.log('CONNECTED TO MONGODB')
}).catch((err)=>{
  console.error("Failed to Connect to MongoDB: ", err)
})

app.use('/driver-schedules/', driverScheduleRouter)

app.listen(port, ()=>{
  console.log(`Server Running on Port ${port}`)
})