var express = require('express');
var router = express.Router();
const Form1 = require('../models/form1')

/* GET form listing. */
router.get('/', function (req, res, next) {
    
    res.send('');
});

module.exports = router;
