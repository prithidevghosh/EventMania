const express = require('express');
const router = express.Router();
const eventcontroller = require('../controller/event-controller');


router.get('/', eventcontroller.eventPage)
router.post('/create', eventcontroller.create)
router.get('/filter/:id', eventcontroller.filter)
router.get('/register/:id1/:id2', eventcontroller.handleRegistration)
module.exports = router;