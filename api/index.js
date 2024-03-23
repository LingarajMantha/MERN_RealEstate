import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './models/routes/user.route.js';
import authRouter from './models/routes/auth.route.js'
dotenv.config();

//connecting mongoose (data base to our project) to the by using the below connect method
mongoose
    .connect(process.env.MONGO)
    .then(()=>{
    console.log('Connected to MongoDB!');

}).catch((err)=>{
    console.log(err);
})

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
}
);

app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);