 const express = require('express');
 const dotenv = require('dotenv');
 const mongoose = require('mongoose');
 
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

 const port = process.env.PORT || 3000;

 app.listen(port,()=>{
     console.log(`Server is running on PORT ${port}`);
 })
