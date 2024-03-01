const express=require('express')
const ProfileData=express.Router()
const Schema=require('../model/Schemas')
ProfileData.post('/profiledata',async(req,res)=>{
    const UserName=req.body.userName
    const userData=Schema.Users
    const Data=await userData.findOne({username:UserName})
    res.send(Data)
    res.end()
})

module.exports=ProfileData