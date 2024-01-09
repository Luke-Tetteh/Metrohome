import express from 'express';
import mongoose, {connect} from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';   
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=> {
    console.log("Connected to MongoDB!");
} ) 
const app = express();

app.use(express.json());

app.listen(4000, () => {
    console.log('Server is running on port 4000!!');
} 
);
