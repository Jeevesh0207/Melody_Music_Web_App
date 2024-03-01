const express=require('express')
const Devotion=express.Router()

Devotion.get('/devotion',(req,res)=>{
    const array=[
        {
            id:1,
            Name:"Meri Maa Ke Barabar Koi Nahi",
            Singer:"Payal Dev ft. Jubin Nautiyal ",
            ID:"fCdS-UShx4c"   
        },
        {
            id:2,
            Name:"Mere Ghar Ram Aaye Hain",
            Singer:"Jubin Nautiyal",
            ID:"vBJ5HSs-N9o"   
        },
        {
            id:3,
            Name:"Shri Krishna Govind Hare Muraril",
            Singer:"Jubin Nautiyal",
            ID:"1qmPNot9NJs"   
        },
        {
            id:4,
            Name:"Har Har Mahadev",
            Singer:"Sachet Tandon, Parampara Tandon",
            ID:"uSb0M_UQE1o"   
        },
        {
            id:5,
            Name:"Om Jai Jagdish Hare",
            Singer:"Tulsi Kumar, Neha Kakkar, Dhvani Bhanushali, Parampara Thakur, Jubin Nautiyal, Sachet Tandon, Guru Randhawa, Millind Gaba",
            ID:"rNRgdSMjoDM"   
        },
        {
            id:6,
            Name:"Mere Bhole Nath",
            Singer:"Jubin Nautiyal",
            ID:"uJtoY919sjU"   
        },
        {
            id:7,
            Name:"Shiv Tandav",
            Singer:"Shiv Tandav Rock Version X Aigiri Nandini",
            ID:"aLBImFnsWHM"   
        },
        {
            id:8,
            Name:"Maiya Teri Jai Jaikaar",
            Singer:"Arijit Singh Jeet Gannguli Gurmeet Choudhary",
            ID:"yutx7mSPrM8"   
        },
        {
            id:9,
            Name:"Siya Ram",
            Singer:"Jubin Nautiyal, Jaya Kishori",
            ID:"iuSNi7ChFww"   
        },
        {
            id:10,
            Name:"Hanuman Chalisa",
            Singer:"Sachet Tandon",
            ID:"WFABZjZz1mc"   
        },
    ]
    res.send(array)
})

module.exports = Devotion