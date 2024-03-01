const express=require('express')
const Schema=require('../model/Schemas')
const Fogort=express()

Fogort.post('/forgot/verifyemail',async(req,res)=>{
    const Email=req.body.Email
    const user=Schema.Users
    const CheckEmail=await user.findOne({email:Email})
    if(CheckEmail){
        res.send('Valid')
    }
    else{
        res.send('Invalid')
    }
    res.end()
})

module.exports=Fogort