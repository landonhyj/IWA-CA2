const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Book = mongoose.model('Book');

router.get('/',(req,res) => {
    res.render("book/addAndEdit",{
        viewTitle : "Insert Book"
    
    });

});

router.post('/',(req,res) => {
    insertNewBook(req,res);
});


function insertNewBook(req, res){
    var book = new Book();
    book.titleName = req.body.titleName;
    book.author = req.body.author;
    book.year = req.body.year;
    book.price = req.body.price;
    book.save((err, doc) => {
        if (!err)
            res.redirect('book/list');
        else{
            console.log('Error when insertion : ' + err);
        }
    });
}

router.get('/list',(req,res) => {
    res.json('from list');


});


module.exports = router ;