require('./models/database'); //This server.js require database.js from models file in order to connect to the mongodb atlas.
require('dotenv').config();//Require the .env file to get the credentials of mongodb atlas.

const express = require('express');//This module allows this app to respond to HTTP Requests, defines the routing and renders back the required content.
const path = require('path');//The path module provides utilities for working with file and directory paths.
const Handlebars = require('handlebars');//The handlebars module compiles templates into JavaScript functions, therefore i've choose it (front-end) for this CA.
const exphbs = require('express-handlebars');//The express-handlebars allows application to use view engine for Express which doesn't suck.
const bodyparser = require('body-parser');//This module which provides connect middleware for parsing HTTP request bodies,it supports JSON and urlencoded formats and does not support multipart requests.
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');//This module I've installed for troubleshooting on failure to retrieve collections back to the book's list.
const book_controller = require('./controllers/book_controller');//The server.js require book_controller.js file to let app the functions inside the controller.

var port = process.env.PORT || 3000;//This set our port process through env port any or 3000;
var app = express();//This set our app to be handled by Express
app.use(bodyparser.urlencoded({//This set our app to use bodyparser to able to encod the url.
    extended: true
}));

app.use(bodyparser.json());//This set our app convert the data into JSON
app.set('views', path.join(__dirname, '/views'));//This set our app with first parameter views folder and the path to directory 

//This set our app engine method to use handlebars and exphbs(express-handlebars),with layout that i created with the callback function to render the layout
app.engine('hbs', exphbs({ handlebars: allowInsecurePrototypeAccess(Handlebars),
            extname: 'hbs', 
                defaultLayout: 'mainLayout', 
                    layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(port, function(err){//This set our app list to the port 
    console.log("Listening on Port" + port)


});

app.use('/book', book_controller);//This set our app to use /book folder inside the views and the controller