var express = require('express');
var router = express.Router();


const categories= require('../data/categories');
const Category_80 = require('../models/categoryModel_80');
const crown2Controller_80 =require('../controllers/crown2Controller_80');



//const db = require('../utils/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_80', { 
    title: '408410180 黃礬玄(static)',
    data : categories
  });
});

router.get('/homepage', crown2Controller_80.getHomepage);

module.exports = router;