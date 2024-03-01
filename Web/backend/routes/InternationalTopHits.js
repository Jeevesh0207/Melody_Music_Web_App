const express=require('express')
const InternationalTopHits=express.Router()

InternationalTopHits.get('/internationaltophits',(req,res)=>{
    const array=[
        {
            id:1,
            Name:"Without Me",
            Singer:"Halsey",
            ID:"0H7txPklqAI"   
        },
        {
            id:2,
            Name:"Despacito",
            Singer:"Luis Fonsi",
            ID:"gm3-m2CFVWM"   
        },
        {
            id:3,
            Name:"Taki Taki",
            Singer:"DJ Snake, Selena Gomez",
            ID:"Ov3mSO5SVg8"   
        },
        {
            id:4,
            Name:"Waka Waka (This Time For Africa)",
            Singer:"Shakira",
            ID:"czWcyZRAMtk"   
        },
        {
            id:5,
            Name:"Calm Down",
            Singer:"Rema, Selena Gomez",
            ID:"CQLsdm1ZYAw"   
        },
        {
            id:6,
            Name:"Unstoppable",
            Singer:"Sia",
            ID:"jJvDnYdD8JQ"   
        },
        {
            id:7,
            Name:"Gasolina",
            Singer:"Daddy Yankee",
            ID:"4CTBznuwV4w"   
        },
        {
            id:8,
            Name:"Perfect",
            Singer:"Ed Sheeran",
            ID:"2Vv-BfVoq4g"   
        },
        {
            id:9,
            Name:"Bones",
            Singer:"Imagine Dragons",
            ID:"ZNsPYmkSPeI"   
        },
        {
            id:10,
            Name:"Love Me Like You Do",
            Singer:"Ellie Goulding",
            ID:"bgjUzhdmmF0"   
        },
        {
            id:11,
            Name:"Let Me Love You",
            Singer:"DJ Snake",
            ID:"SMs0GnYze34"   
        },
        {
            id:12,
            Name:"Believer",
            Singer:"Imagine Dragons",
            ID:"W0DM5lcj6mw"   
        },
        {
            id:13,
            Name:"People",
            Singer:"Libianca",
            ID:"MBF1mTW4kFY"   
        },
        {
            id:14,
            Name:"Señorita",
            Singer:"Shawn Mendes, Camila Cabello",
            ID:"ow1QqW0jzTo"   
        },


    ]
    res.send(array)
})

module.exports=InternationalTopHits