import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import connectDB from "./config/db";


dotenv.config();
connectDB();
const app = express();


app.use(express.json());

const PORT = process.env.PORT || 8080

app.get('/', (req,res)=>{
  res.send('Server is running...')
});

app.listen(PORT,()=>console.log(`Server is runnning port ${PORT}`))