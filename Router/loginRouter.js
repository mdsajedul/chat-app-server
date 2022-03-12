const express = require('express');

// internal export 
const { getLogin } = require('../controller/loginController');




const router = express.Router();


router.get('/',getLogin);

module.exports = router;