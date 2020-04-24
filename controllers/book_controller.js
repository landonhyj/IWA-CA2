const express = require('express');
var router = express.Router();

router.get('/',(req,res) => {
    res.json("some text");

});

module.exports = router ;