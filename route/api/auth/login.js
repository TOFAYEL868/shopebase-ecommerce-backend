const express = require('express')
const _ = express.Router()


_.get('/login', (req, res)=>{
    res.send("Sign in");
})

// _.use('registration', Login )




module.exports = _