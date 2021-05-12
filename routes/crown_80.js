var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_80', { title: '408410180 黃礬玄'});
});

module.exports = router;