const express=require('express')
const Old=express.Router()

Old.get('/old',(req,res)=>{
    const array=[
        {
            id:1,
            Name:"Pehle Kabhi Na Mera Haal",
            Singer:"Udit Narayan, Alka Yagnik",
            ID:"OtKa_eN88Qo"   
        },
        {
            id:2,
            Name:"Kasam Khake Kaho",
            Singer:"Alka Yagnik & Kumar Sanu",
            ID:"ZfZPVSiNasI"   
        },
        {
            id:3,
            Name:"Aksar Is Duniya Mein",
            Singer:"Udit Narayan, Alka Yagnik & Kumar Sanu",
            ID:"Ivhf4g2ob0g"   
        },
        {
            id:4,
            Name:"Kahin Pyaar Na Ho Jaye",
            Singer:"Alka Yagnik, Kumar Sanu",
            ID:"HUBHg1Wwbis"   
        },
        {
            id:5,
            Name:"Aap Ka Aana Dil Dhadkana",
            Singer:"Alka Yagnik, Kumar Sanu",
            ID:"EzNvw1ByGFc"   
        },
        {
            id:6,
            Name:"Dekhn Waalo Ne",
            Singer:"Alka Yagnik, Udit Narayan",
            ID:"5b-58kGegNo"   
        },
        {
            id:7,
            Name:"Rabb Kare Tujhko Bhi",
            Singer:"Alka Yagnik, Udit Narayan",
            ID:"BukHiHrbFpA"   
        },
        {
            id:8,
            Name:"Teri Chunnariya",
            Singer:"Kumar Sanu, Alka Yagnik",
            ID:"07KoprnKr_Y"   
        },
        {
            id:9,
            Name:"O Jaane Jigar",
            Singer:"Alka Yagnik, Kumar Sanu",
            ID:"MUwejioOa_4"   
        },
        {
            id:10,
            Name:"Dil Hai Tumhaara",
            Singer:"Alka Yagnik, Kumar Sanu & Udit Narayan",
            ID:"iIqou2YxDDw"   
        },
    ]
    res.send(array)
})

module.exports = Old