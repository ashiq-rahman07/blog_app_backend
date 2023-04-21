import  express  from "express";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());


app.get('/', (req,res)=>{
  res.send('Server is running...')
});

app.listen(5000,()=>console.log("Server is runnning port 5000"))