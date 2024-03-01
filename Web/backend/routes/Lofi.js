const express=require('express')
const Lofi=express.Router()

Lofi.get('/lofi',(req,res)=>{
    const array=[
        {
            id:1,
            Name:"Closer X Apna Bana Le",
            Singer:"The Chainsmokers & Arijit Singh",
            ID:"Z3Bub_EKuCw"   
        },
        {
            id:2,
            Name:"People X Nainowale Ne",
            Singer:"Neeti Mohan & Libianca",
            ID:"riVOHkYvzjI"   
        },
        {
            id:3,
            Name:"Let Me Down Slowly X Kabhi Jo Badal",
            Singer:"Alec Benjamin, Arijit Singh",
            ID:"OFQF2YCPy8w"   
        },
        {
            id:4,
            Name:"Tu Hi Haqeeqat",
            Singer:"Arijit Singh",
            ID:"W_85eJwXKl8"   
        },
        {
            id:5,
            Name:"Maan Bharryaa 2.0",
            Singer:"B Praak",
            ID:"1vstPBeJy3g"   
        },
        {
            id:6,
            Name:"Dil Diyan Gallan",
            Singer:"Atif Aslam",
            ID:"XFUSTVk-5rQ"   
        },
        {
            id:7,
            Name:"Mere Yaara",
            Singer:"Arijit Singh, Neeti Mohan",
            ID:"kfLtirRkyS8"   
        },
        {
            id:8,
            Name:"Mast Magan",
            Singer:"Chinmayi Sripada & Arijit Singh",
            ID:"33kPcchuMAw"   
        },
        {
            id:9,
            Name:"Aa Raat Bhar Jaye Na Ghar",
            Singer:"Arjit Singh, Shreya Ghoshal",
            ID:"D-grFPvf9r4"   
        },
        {
            id:10,
            Name:"Chhod Diya",
            Singer:"Arijit Singh",
            ID:"Q6UCGrgPns8"   
        },
    ]
    res.send(array)
})

module.exports = Lofi