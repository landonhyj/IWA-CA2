const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    titleName: { type : String,
    },
    author: { type : String,
    },
    year: { type : String,
    },    
    price: { type : String
    }    
});

module.exports = mongoose.model('Book', bookSchema);