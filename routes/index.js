var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// GET donna
router.get('/donna', function(req, res, next) {
	res.render('donna');
});

// GET petter
router.get('/petter', function(req, res, next) {
	res.render('petter');
});

// GET montana
router.get('/montana', function(req, res, next) {
	res.render('montana');
});

// GET tyler
router.get('/tyler', function(req, res, next) {
	res.render('tyler');
});
