const express = require('express');
var router = express.Router();

router.get('/',(req,res) => {
    res.render("book/addAndEdit",{
        viewTitle : "Insert Book"
    
    });

});

module.exports = router ;