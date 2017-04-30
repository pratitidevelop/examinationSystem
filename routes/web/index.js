var express = require('express');
var router = express.Router();



var User = require('./users');

router.get('/', User.get);


module.exports = router
