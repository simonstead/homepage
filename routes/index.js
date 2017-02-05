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

/* GET music page. */
router.get('/music', function(req, res, next) {
  res.render('music', { title: 'My Music' });
});

/* GET member page. */
router.get('/membership', function(req, res, next) {
  res.render('membership', { title: 'Membership Landing Page' });
});

/* GET movies page. */
router.get('/movies', function(req, res, next) {
  res.render('movies', { title: 'Film & TV Work' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Get in touch' });
});

/* GET payments page. */
router.get('/payments', function(req, res, next) {
  res.render('payments', { title: 'Make a donation, or pay an invoice' });
});
module.exports = router;
