 const express = require('express');
 const dotenv = require('dotenv');
 const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// internal imports 
const {notFoundHandler,errorHandler} = require('./middlewares/common/errorHandler')
 
 const app = express();
 dotenv.config();

 //database connection
 mongoose.connect(`mongodb+srv://${process.env.USERNAME_MONGODB}:${process.env.PASSWORD_MONGODB}@cluster0.tmldf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(()=>{
        console.log('Database connection successful')
    })
    .catch(err=>console.log(err));

 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(cookieParser(process.env.COOKIE_SECRET))

 const port = process.env.PORT || 3000;


//404 not found handler
app.use(notFoundHandler)
//default error handler 
app.use(errorHandler)


 app.listen(port,()=>{
     console.log(`Server is running on PORT ${port}`);
 })
