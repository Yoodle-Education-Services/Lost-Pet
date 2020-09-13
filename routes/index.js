const express = require('express');
const petcustomers = require('../models/petcustomers');
const { response } = require('express');
const User = require('../models/users');

var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lost & found Pet Central'  });
});

router.get('/about', function (req, res, next) {
    res.render('about', {title: 'about us'});
});

router.get('/contact', function (req, res, next) {
    res.render('contact', {title: 'Contact us'});
});

router.get('/lost', function (req, res, next) {
    res.render('lost', {title: 'Lost items'});
});
router.get('/found', function (req, res, next) {
    res.render('found', {title: 'Founded Items'});
});
//sign-up form
router.get('/signup-form', function (req, res) {
    
        res.render('signup-form', {title: 'fill form'})
        
    });
router.post('/signup-form', function(req, res){

    var body = req.body;
    var res_body = {
        name: body.name,
        email: body.email,
        password: body.password,
        phone: body.phone

    }
    res.render('welcome', res_body);
})

function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).json({nope: true});
    } else {
        next();
    }
}

 
   
module.exports = router;
