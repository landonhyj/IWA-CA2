require('./models/database');

const express = require('express');
const path = require('path');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const book_controller = require('./controllers/book_controller');

var port = process.env.port || 3000;
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views'));
app.engine('hbs', exphbs({ handlebars: allowInsecurePrototypeAccess(Handlebars),
            extname: 'hbs', 
                defaultLayout: 'mainLayout', 
                    layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', '.hbs');

app.listen(port, function(err){
    console.log("Listening on Port" + port)


});

app.use('/book', book_controller);