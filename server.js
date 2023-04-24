import  express  from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./config/db";
import path from "path";
dotenv.config();

import userRoutes from './routes/userRoutes'
import postRoutes from './routes/postRoutes'
import commentRoutes from './routes/commentRoutes'

import { errorResponserHandler, invalidPathHandler } from "./middleware/errorHandler";



const app = express();
app.use(cors())

connectDB();
app.use(express.json());

const PORT = process.env.PORT || 8080

app.get('/', (req,res)=>{
  res.send('Server is running...')
});



app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/comments',commentRoutes )

//static assets
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));


app.use(invalidPathHandler);
app.use(errorResponserHandler);

app.listen(PORT,()=>console.log(`Server is runnning port ${PORT}`))