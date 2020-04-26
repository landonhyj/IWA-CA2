const mongoose = require('mongoose'); //Require module mongoose in this database.js
require('dotenv').config(); //This dotenv require is to deal with the mongodb atlas secret credentials hidden inside .env file , in order to use it we need to install dotenv module.

mongoose.connect(process.env.MONGODB_URL);//Using mongoose to connect to the MONGODB_URL variable that containes credentials that store hidden inside .env file
mongoose.connection.on('error', (err) => { //Check if there is any error , if there is then print a error msg then stop the connection 
    console.log('Mongodb Error: ', err); 
    process.exit();
});

mongoose.connection.on('connected', () => { //If the connection is succesfull then print a msg 
    console.log('MongoDB is successfully connected');
});

require('./book.model');//To able to use the schema collections from book.model