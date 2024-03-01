const express=require('express')
const AddToFavourite=express.Router()
const Schema=require('../model/Schemas')

AddToFavourite.post('/addtofavourite',async(req,res)=>{
    const Name=req.body.Name
    const SingerName=req.body.SingerName
    const SongID=req.body.ID
    const Url=req.body.Url
    const isSearch=req.body.isSearch
    const UserName=req.body.UserName
    const useschema=Schema.Users
    const UserData=await useschema.findOne({username:UserName})
    const ArrayofSong=UserData.favSong
    if(ArrayofSong.some(e=>e.ID===SongID)){
        const Data=await useschema.updateOne({username:UserName},
            {
                $pull:{
                    favSong:{
                       ID:SongID
                    }
                }
            }
        )
        if(Data){
            res.send("Data Update")
        }
    }
    else{
        const Data=await useschema.updateOne({username:UserName},
            {
                $push:{
                    favSong:{
                        Name:Name,
                        SingerName:SingerName,
                        ID:SongID,
                        url:Url,
                        isSearch:isSearch
                    }
                }
            }
        )
        if(Data){
            res.send("Data Push")
        }
    }
    res.end()
})

AddToFavourite.post('/addtofavourite/find',async(req,res)=>{
    const SongID=req.body.ID
    const UserName=req.body.UserName
    const useschema=Schema.Users
    const UserData=await useschema.findOne({username:UserName})
    const ArrayofSong=UserData.favSong
    if(ArrayofSong.some(e=>e.ID===SongID)){
        res.send("Present")
    }
    else{
        res.send("Not Present")
    }
    res.end()
})

module.exports=AddToFavourite