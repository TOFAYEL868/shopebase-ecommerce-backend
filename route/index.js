const express = require('express')
const _ = express.Router()
const Auth = require('./api/index')

_.get('/api/v1', (req, res)=>{
    res.send("Ami API V1");
})

_.use('/api/v1', Auth )


module.exports = _