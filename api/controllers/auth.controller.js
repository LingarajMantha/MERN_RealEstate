import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";


export const signup =  async (req, res, next)=>{

    const{username, email, password} = req.body;

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User ({username, email, password:hashedPassword});
    try{
        await newUser.save()
        res.status(201).json("user created sucessfully");
    }catch(error){
        next(errorHandler(550, 'error from the function'));  //this error message  is showed when you send user name or email dupication while entering the user 
        //we are using the error handling form the middleware ,, when we use next it prints the error that is picing form the index.js
    }
}

