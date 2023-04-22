import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import connectDB from "./config/db";
dotenv.config();
import userRoutes from './routes/userRoutes'
import { errorResponserHandler, invalidPathHandler } from "./middleware/errorHandler";


const app = express();

connectDB();
app.use(express.json());

const PORT = process.env.PORT || 8080

app.get('/', (req,res)=>{
  res.send('Server is running...')
});

// app.use(invalidPathHandler);
app.use(errorResponserHandler);

app.use('/api/users', userRoutes)

app.listen(PORT,()=>console.log(`Server is runnning port ${PORT}`))