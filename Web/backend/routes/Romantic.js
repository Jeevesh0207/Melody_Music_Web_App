const express=require('express')
const Romantic=express.Router()

Romantic.get('/romantic',(req,res)=>{
    const array=[
        {
            id:1,
            Name:"Satranga",
            Singer:"Arijit,Shreyas P,Siddharth-Garima",
            ID:"HrnrqYxYrbk"   
        },
        {
            id:2,
            Name:"Hawayein",
            Singer:"Arijit Singh",
            ID:"cYOB941gyXI"   
        },
        {
            id:3,
            Name:"Love Me Thoda Aur",
            Singer:"Arijit Singh",
            ID:"lz1-1Q8Gync"   
        },
        {
            id:4,
            Name:"Hasi",
            Singer:"Ami Mishra",
            ID:"oyaudgo5_8Y"   
        },
        {
            id:5,
            Name:"Mere Liye",
            Singer:"Akhil Sachdeva",
            ID:"rhP7QSWYY8c"   
        },
        {
            id:6,
            Name:"Apna Bana Le",
            Singer:"Arijit Singh & Sachin-Jigar",
            ID:"u2NAuswnTKs"   
        },
        {
            id:7,
            Name:"Rabba Janda",
            Singer:"Jubin Nautiyal",
            ID:"GjfxDRRLXAQ"   
        },
        {
            id:8,
            Name:"Thoda Thoda Pyaar",
            Singer:"Stebin Ben",
            ID:"USccSZnS8MQ"   
        },
        {
            id:9,
            Name:"Channa Ve",
            Singer:"Akhil Sachdeva & Mansheel Gujral",
            ID:"se9DDAwwGQY"   
        },
        {
            id:10,
            Name:"Jogi",
            Singer:"Yasser Desai & Aakanksha Sharma",
            ID:"HexFqifusOk"   
        },
        {
            id:11,
            Name:"Zaalima",
            Singer:"Arijit Singh and Harshdeep Kaur",
            ID:"lpdRqn6xwiM"   
        },
        {
            id:12,
            Name:"Jaan Ban Gaye",
            Singer:"Mithoon, Vishal Mishra & Asees Kaur",
            ID:"a6cJAFFQn_I"   
        },
        {
            id:13,
            Name:"Yu Tere Hue Hum",
            Singer:"Jubin Nautiyal & Palak Muchhal",
            ID:"kOEs6Ggs5xA"   
        },
        {
            id:14,
            Name:"Maiyya Mainu",
            Singer:"Sachet Tandon",
            ID:"1pkcaeMRrns"   
        },
        {
            id:15,
            Name:"Ik Tu Hai",
            Singer:"Jubin Nautiyal & Shashwat Sachdev",
            ID:"h1hdxIV-03M"   
        },
    ]
    res.send(array)
})

module.exports = Romantic