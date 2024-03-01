const { json } = require('body-parser')
const express=require('express')
const Slider=express.Router()

Slider.get('/slider',async(req,res)=>{
    const Data=[
        {
            id:1,
            Name:'Jubin Nautiyal',
            Path:'jubinnautiyal'
        },
        {
            id:2,
            Name:'Arijit Singh',
            Path:'arjitsingh'
        },
        {
            id:3,
            Name:'Justin Bieber',
            Path:'justinbieber'
        },
        {
            id:4,
            Name:'Kim Tae-hyung',
            Path:'kimtaehyung'
        },
        {
            id:5,
            Name:'Sonu Nigam',
            Path:'sonunigam'
        },
        {
            id:6,
            Name:'Kumar Sanu',
            Path:'kumarsanu'
        },
        {
            id:7,
            Name:'Shreya Ghoshal',
            Path:'shreyaghoshal'
        },
        {
            id:8,
            Name:'Dua Lipa',
            Path:'dualipa'
        },
        {
            id:9,
            Name:'Taylor Swift',
            Path:'taylorswift'
        },
        {
            id:10,
            Name:'Ed Sheeran',
            Path:'edsheeran'
        },
        {
            id:11,
            Name:'Atif Aslam',
            Path:'atifaslam'
        },
        
    ]
    res.send(Data)
})

module.exports=Slider