const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    titleName: { type : String,
                 required: 'Please fill this field.'   
    },
    author: { type : String,
            required: 'Please fill in an author name.'
    },
    year: { type : Number,
            required: 'Please fill in year of published.'
    },    
    price: { type : Number,
            required: 'Please fill in a price of the book.'
    }    
});

mongoose.model('Book', bookSchema);