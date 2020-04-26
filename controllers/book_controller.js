//The modules that we need for the route express,mongoose.
const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Book = mongoose.model('Book'); //Create Book as a variable for using later to do with the crud function.

// This is route get method with an uri '/' with two parameters (request and respond),then it render my addAndEdit.hbs file 
router.get('/', (req,res) => {
    res.render("book/addAndEdit",{
        viewTitle : "Insert Book Details" //The viewTitle is my header variables from addAndEdit.hbs file that i gave , it will print as Insert Book Details.
    
    });

});

// This is the route post method with an uri '/' , it check if the id is existing or not then whether to call create or update function.
router.post('/',(req,res) => {
    if (req.body._id == '')
        insertNewBook(req,res);//calling create new book function.
        else
        updateNewBook(req,res);//calling update a book function.
});

// This is the update a new book function which alternating an existing record from the book's list
function updateNewBook(req,res) {
    Book.findOneAndUpdate({ _id: req.body._id}, req.body, { useNewUrlParser:true}, (err, doc) =>{
        if(!err)  //Check if there is no error then redirect to the page with uri book/list
        {res.redirect('book/list');
    
    }
    else
        console.log('Error when updating book : ' + err); //Print some error msg if there is an error

    });

}

// This is the add a new book function which adding a new record into the book's list
function insertNewBook(req, res){
    var book = new Book(); //Create an object book to use it later for the model of my bookschema 
    book.titleName = req.body.titleName;
    book.author = req.body.author;
    book.year = req.body.year;
    book.price = req.body.price;
    book.save((err, doc) => { //Save method , checking if there is no error then show the page of book's list with uri book/list 
        if (!err) 
            res.redirect('book/list');
        else{
            
            console.log('Error when insertion : ' + err); //Print error msg if there is an error
        }
    });
}

// This is the route get method with uri /list which in charge of showing the book's list
router.get('/list',(req,res) => {
    Book.find((err, docs) =>{
        if(!err) {
            res.render("book/list", { //If there is no error then show my book's list which is inside book folder call list.hbs
                list: docs
            });

        }
        else {
            console.log('Error in retrieving book list :' + err); //Print error msg if there is any
        }
    });

});

// This is the route get id method with uri /:id , use is update function
router.get('/:id',(req,res) => {
    Book.findById(req.params.id, (err, doc) => { //Find by single id
        if(!err){
            res.render("book/addAndEdit", {//If there is no error then show my addAndEdit page which is inside book folder
                viewTitle: "Update book", //viewTitle as an header variables and printing the words Update book
                book: doc // Document property as book. 
            });

        }

    });

});

//This is the route to delete a specific id record method 
router.get('/delete/:id', (req,res) => {
    Book.findByIdAndRemove(req.params.id, (err,doc) =>{ 
        if(!err){
            res.redirect('/book/list'); //Check if there is no error then show the book's list page
        }
        else
       
        {
          console.log('Error when deleting a book : ' + err); //Print error msg if there is any
        }

    });
});

// Assign router as a module 
module.exports = router ;