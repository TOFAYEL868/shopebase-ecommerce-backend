const express = require('express')
const _ = express.Router()
const Login = require('./auth/login')
const Registration = require('./auth/registration')

_.get('/authentication', (req, res)=>{
    res.send("Ami API V1 authentication");
})

_.use('/authentication', Login )
_.use('/authentication', Registration )




module.exports = _