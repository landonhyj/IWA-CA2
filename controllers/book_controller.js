//The modules that we need for the route express,mongoose.
const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Book = mongoose.model('Book'); //Create Book as a variable for using later to do with the crud function.

router.get('/', (req,res) => {
    res.render("book/addAndEdit",{
        viewTitle : "Insert Book Details"
    
    });

});

router.post('/',(req,res) => {
    if (req.body._id == '')
        insertNewBook(req,res);
        else
        updateNewBook(req,res);
});

function updateNewBook(req,res) {
    Book.findOneAndUpdate({ _id: req.body._id}, req.body, { useNewUrlParser:true}, (err, doc) =>{
        if(!err) 
        {res.redirect('book/list');
    
    }
    else
        console.log('Error when updating book : ' + err);

    });

}

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
    Book.find((err, docs) =>{
        if(!err) {
            res.render("book/list", {
                list: docs
            });

        }
        else {
            console.log('Error in retrieving book list :' + err);
        }
    });

});

router.get('/:id',(req,res) => {
    Book.findById(req.params.id, (err, doc) => {
        if(!err){
            res.render("book/addAndEdit", {
                viewTitle: "Update book",
                book: doc
            });

        }

    });

});

router.get('/delete/:id', (req,res) => {
    Book.findByIdAndRemove(req.params.id, (err,doc) =>{
        if(!err){
            res.redirect('/book/list');
        }
        else
       
        {
          console.log('Error when deleting a book : ' + err);
        }

    });
});

module.exports = router ;