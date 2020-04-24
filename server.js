require('./models/database');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const book_controller = require('./controllers/book_controller');

var app = express();
var port = process.env.port || 3000;

app.set('views', path.join(__dirname, '/views'));
app.engine('hbs', exphbs({extname: 'hbs', 
                defaultLayout: 'mainLayout', 
                    layoutsDir: ++__dirname + '/views/layout/' }));
app.set('view engine', 'hbs');

app.listen(port, function(err){
    console.log("Listening on Port" + port)


});

app.use('/book',book_controller );