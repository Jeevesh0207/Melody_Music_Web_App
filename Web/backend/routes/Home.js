const express=require('express')
const Home=express.Router()

Home.get('/',(req,res)=>{
    res.send("<h1>I am Home</h1>")
})

module.exports = Home