const express=require('express')
const Sad=express.Router()

Sad.get('/sad',(req,res)=>{
    const array=[
        {
            id:1,
            Name:"Chhod Diya",
            Singer:"Arijit Singh, Kanika Kapoor",
            ID:"7DzWXIE4Pj0"   
        },
        {
            id:2,
            Name:"Thodi Jagah",
            Singer:"Arijit Singh",
            ID:"HtvwcJLqxE0"   
        },
        {
            id:3,
            Name:"Mumkin Nahi Hai Tujhko Bhulaana",
            Singer:"Arijit Singh ,Shadab & Altamash Faridi",
            ID:"vc-KxBjIbgI"   
        },
        {
            id:4,
            Name:"Hamari Adhuri Kahani",
            Singer:"Arjit Singh",
            ID:"ENVBeAhNz1c"   
        },
        {
            id:5,
            Name:"Naina",
            Singer:"Arijit Singh",
            ID:"KzBa4ZKTVjE"   
        },
        {
            id:6,
            Name:"Main Rahoon Ya Na Rahoon",
            Singer:"Amaal Mallik, Armaan Malik",
            ID:"Dp6lbdoprZ0"   
        },
        {
            id:7,
            Name:"Humdard",
            Singer:"Arijit Singh, Mithoon",
            ID:"FJ55SHCzt88"   
        },
        {
            id:8,
            Name:"Qaafirana ",
            Singer:"Arijit Singh & Nikhita Gandhi",
            ID:"ZmcBC9-wAXM"   
        },
        {
            id:9,
            Name:"Tum Hi Ho Aashiqui 2",
            Singer:"Arijit Singh",
            ID:"IJq0yyWug1k"   
        },
        {
            id:10,
            Name:"Chahun Main Ya Naa",
            Singer:"Arijit Singh, Palak Muchhal",
            ID:"VdyBtGaspss"   
        },
    ]
    res.send(array)
})

module.exports = Sad