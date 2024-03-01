const express=require('express')
const TopHits=express.Router()

TopHits.get('/tophits',(req,res)=>{
    const array=[
        {
            id:1,
            Name:"Moye Moye",
            Singer:"Teya Dora",
            ID:"_GSdkWzoYJo" 
        },
        {
            id:2,
            Name:"Aziyat",
            Singer:"Pratyush Dhiman",
            ID:"5k58kWEuwJQ" 
        },
        {
            id:3,
            Name:"Tere Hawaale",
            Singer:"Arijit Singh & Shilpa Rao",
            ID:"KUpwupYj_tY" 
        },
        {
            id:4,
            Name:"Cheques",
            Singer:"Shubh",
            ID:"4tywp83zkmk" 
        },
        {
            id:5,
            Name:"Pehle Bhi Main",
            Singer:"Vishal Mishra",
            ID:"QKMTreKTpug"   
        },
        {
            id:6,
            Name:"Jaan Denge Tumhe",
            Singer:"Laqshay Kapoor",
            ID:"D9fbtKjJ8rQ"   
        },
        {
            id:7,
            Name:"Yaad Ban Gaye",
            Singer:"Tulsi Kumar & Manan Bhardwaj",
            ID:"oaUwdKG2UQs"   
        },
        {
            id:8,
            Name:"Heeriye",
            Singer:"Arijit Singh & Jasleen Royal",
            ID:"RLzC55ai0eo"   
        },
        {
            id:9,
            Name:"Aisi Teri Yaadein",
            Singer:"Jubin Nautiyal",
            ID:"ly4moi2plX4"   
        },
        {
            id:10,
            Name:"Baby ft. Ludacris",
            Singer:"Justin Bieber",
            ID:"khOFw2f4bQY"   
        },
        {
            id:11,
            Name:"Suraj Hua Maddham",
            Singer:"Alka Yagnik, Sonu Nigam",
            ID:"D0V8S0elRyA"   
        },
        {
            id:12,
            Name:"Chaand Baaliyan",
            Singer:"Aditya A.",
            ID:"7c3-Gei5j4w"   
        },
        {
            id:13,
            Name:"Tera Zikr",
            Singer:"Darshan Raval",
            ID:"HscrSwilshM"   
        },
        {
            id:14,
            Name:"Kali Kali Zulfon Ke",
            Singer:"Jubin Nautiyal, Rochak Kohli",
            ID:"224EFEddxMk"   
        },
        {
            id:15,
            Name:"Satranga",
            Singer:"Arjit Singh",
            ID:"HrnrqYxYrbk"   
        },


    ]
    res.send(array)
})

module.exports = TopHits