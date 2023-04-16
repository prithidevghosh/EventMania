const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/user-controller');
const passport = require('passport');
console.log("userroute");

router.get('/signIn', usercontroller.signIn);
router.get('/signUp', usercontroller.signUp)
router.post('/createUser', usercontroller.createUser);
router.post('/createSession', passport.authenticate(
    'local', { failureRedirect: '/user/signIn' }
), usercontroller.createSession);
router.get('/signOut', usercontroller.destroySession);


module.exports = router;