const express=require('express')
const Dance=express.Router()

Dance.get('/dance',async(req,res)=>{
    const array=[
        {
            id:1,
            Name:"Bom Diggy Diggy",
            Singer:"Zack Knight, Jasmin Walia",
            ID:"yIIGQB6EMAM"   
        },
        {
            id:2,
            Name:"Main Tera Boyfriend",
            Singer:"Arijit Singh, Neha Kakkar & Meet Bros.",
            ID:"1ac9FLyQo88"   
        },
        {
            id:3,
            Name:"Friends",
            Singer:"Marshmello & Anne-Marie",
            ID:"jzD_yyEcp0M"   
        },
        {
            id:4,
            Name:"Rockabye",
            Singer:"Clean Bandit",
            ID:"papuvlVeZg8"   
        },
        {
            id:5,
            Name:"Na Ja",
            Singer:"Pav Dharia",
            ID:"Q-GOFPM01d0"   
        },
        {
            id:6,
            Name:"Mercy",
            Singer:"Badshah Feat. Lauren Gottlieb",
            ID:"Jyst8oIHOAY"   
        },
        {
            id:7,
            Name:"Cheap Thrills",
            Singer:"Sia",
            ID:"cyRyLir-Y2k"   
        },
        {
            id:8,
            Name:"Faded",
            Singer:"Alan Walker",
            ID:"60ItHLz5WEA"   
        },
        {
            id:9,
            Name:"Horn Blow",
            Singer:"Hardy Sandhu",
            ID:"IssysxAisfo"   
        },
        {
            id:10,
            Name:"Chaar Botal Vodka",
            Singer:"Yo Yo Honey Singh",
            ID:"x8F5dz8kv1w"   
        },
    ]
    res.send(array)
})

module.exports=Dance