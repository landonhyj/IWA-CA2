const mongoose = require('mongoose'); //This file require mongoose to run the schema that i created later 

//Created a bookSchema with 4 collections same as input field name from addAndEdit.hbs that containing type String and Number 
var bookSchema = new mongoose.Schema({
    titleName: { type : String,
                 required: 'Please fill this field.'   //Required field must be fill in , if not fill in this msg will pop up
    },
    author: { type : String,
            required: 'Please fill in an author name.'//Required field must be fill in , if not fill in this msg will pop up
    },
    year: { type : Number,
            required: 'Please fill in year of published.'//Required field must be fill in , if not fill in this msg will pop up
    },    
    price: { type : Number,
            required: 'Please fill in a price of the book.'//Required field must be fill in , if not fill in this msg will pop up
    }    
});

//Assign the module mongoose to use the model function with parameters Book , and bookSchema.
module.exports = mongoose.model('Book', bookSchema);