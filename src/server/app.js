/*jshint node:true*/
'use strict';

var express = require('express');
var router = express.Router();
var data = require('./data');

router.get('/', function (req, res, next) {
  res.render('index.html');
});

// load-up available sites
router.get('/sites', getSites);

module.exports = router;

//////////////////////////////////////////////////

function getSites(req, res, next) {
	res.send(data.sites);
}