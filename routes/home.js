const express = require('express');
const router = express.Router();
const homecontroller = require('../controller/home-controller')
const eventroute = require('./events')
const userroute = require('./user')

router.get('/', homecontroller.home);
router.use('/events', eventroute);

router.use('/user', userroute);

module.exports = router;