const express = require('express')
const UserData = express.Router()
const Schema = require('../model/Schemas')
// const multer = require("multer");
const path = require('path');
// const fs = require('fs')
require('dotenv/config')

UserData.get('/userdata', (req, res) => {
    res.send('<h1>I am Userdata</h1>')
})

UserData.post('/userdata', async (req, res) => {
    const FName = req.body.FName
    const LName = req.body.LName
    const Email = req.body.Email
    const UserName = req.body.UserName
    const Password = req.body.Password
    const newUser = new Schema.Users({
        fname: FName,
        lname: LName,
        email: Email,
        username: UserName,
        pass: Password,
        img: {
            filename: "",
            path: ""
        },
        favSong: [
            {
                Name: "",
                SingerName: "",
                ID: "",
                url: "",
                imgurl: ""
            }
        ]
    })
    const savedata = await newUser.save()
    if (savedata) {
        res.send('Data Added..')
    }
    res.end()
})

// const storage = multer.diskStorage({
//     destination: './uploads/',
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     },
// });

// const upload = multer({ storage });


// UserData.post('/userdata/update', upload.single('image'), async (req, res) => {
//     const FName = req.body.FName
//     const LName = req.body.LName
//     const UserName = req.body.UserName
//     const FileName = req.file.filename
//     const PathName = req.file.path
//     const userData = Schema.Users
//     const savedata = await userData.findOne({ username: UserName })
//     if (savedata.img.path === undefined || savedata.img.path === "") {
//         const Done = await userData.updateOne(
//             { username: UserName },
//             {
//                 $set: {
//                     fname: FName,
//                     lname: LName,
//                     img: {
//                         filename: FileName,
//                         path: PathName
//                     }
//                 }
//             }
//         )
//         if (Done)
//             res.send('Data Added..')
//     }
//     else {
//         fs.unlinkSync(savedata.img.path)
//         const Done = await userData.updateOne(
//             { username: UserName },
//             {
//                 $set: {
//                     fname: FName,
//                     lname: LName,
//                     img: {
//                         filename: FileName,
//                         path: PathName
//                     }
//                 }
//             }
//         )
//         if (Done)
//             res.send('Replace Data')
//     }
//     res.end()
// })

// UserData.post('/userdata/updatedata',async(req,res)=>{
//     const FName = req.body.FName
//     const LName = req.body.LName
//     const UserName = req.body.UserName
//     const userData = Schema.Users
//     const savedata = await userData.findOne({ username: UserName })
//     if(savedata.img.path){
//         fs.unlinkSync(savedata.img.path)
//         const Done = await userData.updateOne(
//             { username: UserName },
//             {
//                 $set: {
//                     fname: FName,
//                     lname: LName,
//                     img:{
//                         filename: "",
//                         path: ""
//                     }
//                 }
//             }
//         )
//         if (Done)
//             res.send('Remove Img and Data')
//     }
//     else{
//         const Done = await userData.updateOne(
//             { username: UserName },
//             {
//                 $set: {
//                     fname: FName,
//                     lname: LName,
//                 }
//             }
//         )
//         if (Done)
//             res.send('Only Data')
//     }
//     res.end()
// })



module.exports = UserData