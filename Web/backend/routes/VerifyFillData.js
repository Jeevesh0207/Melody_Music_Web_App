const express = require('express')
const VerifyFillData = express.Router()
const Schema = require('../model/Schemas')
require('dotenv/config')

VerifyFillData.get('/verifyfilldata', async (req, res) => {
    res.send('<h1>I am VerifyFillData</h1>')

})


VerifyFillData.post('/verifyfilldata', async (req, res) => {
    const UserName = req.body.UserName
    const Email = req.body.Email
    const user = Schema.Users
    const UserCheck = await user.findOne({ username: UserName })
    const EmailCheck = await user.findOne({ email: Email })
    if(UserCheck){
       res.send('Username already present')
    }
    else if(EmailCheck){
        res.send('Email already present')
    }
    else{
        res.send('Okay')
    }

})


module.exports = VerifyFillData