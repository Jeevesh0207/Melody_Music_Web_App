const express = require('express')
const LoginVerify = express.Router()
const Schema = require('../model/Schemas')

LoginVerify.post('/loginverify',async(req,res)=>{
    const UserName=req.body.UserName
    const userPassword=req.body.Password
    const user=Schema.Users
    const FindUser=await user.findOne({username:UserName})
    if(FindUser){
        const Realpassword=FindUser.pass
        if(userPassword===Realpassword){
            res.send('Correct Password')
        }
        else{
            res.send('Wrong Password')
        }
    }
    else{
        res.send('Wrong Username')
    }
    res.end()
})

module.exports=LoginVerify