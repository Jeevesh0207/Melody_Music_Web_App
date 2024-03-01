const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    fname:{type:String},
    lname:{type:String},
    email:{type:String},
    username:{type:String},
    pass:{type:String},
    img:{
        filename:{type:String},
        path:{type:String}
    },
    favSong:[
        {
            Name:{type:String},
            SingerName:{type:String},
            ID:{type:String},
            url:{type:String},
            isSearch:{type:Boolean}
        }
    ]
},{ minimize: false })



const otpSchema=new Schema({
    email:{type:String},
    otp:{type:String}
})

const Users=mongoose.model('Users',userSchema,'users')
const Otpdata=mongoose.model('Optdata',otpSchema,'otpdata')
const mySchema={'Users':Users,'Otpdata':Otpdata}

module.exports=mySchema