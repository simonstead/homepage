var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simon Stead' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

/* GET contact page. */
router.get('/music', function(req, res, next) {
  res.render('music', { title: 'My Music' });
});

/* GET contact page. */
router.get('/membership', function(req, res, next) {
  res.render('membership', { title: 'Membership Landing Page' });
});


/* GET contact page. */
router.get('/movies', function(req, res, next) {
  res.render('movies', { title: 'Film & TV Work' });
});


module.exports = router;
