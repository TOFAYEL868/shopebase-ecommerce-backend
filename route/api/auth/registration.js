const express = require('express');
const registrationController = require('./../../../controllers/resgistrationControllers');
const _ = express.Router()


// _.get('/registration', (req, res)=>{
//     res.send("Sign Up");
// })

_.post('/registration', registrationController )




module.exports = _