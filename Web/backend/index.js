const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const app=express()



require('dotenv/config')

const Devotion = require('./routes/Devotion');
const Lofi = require('./routes/Lofi');
const Old = require('./routes/Old');
const Romantic = require('./routes/Romantic');
const Sad = require('./routes/Sad');
const TopHits = require('./routes/TopHits');
const Otp = require('./routes/Otp');

const UserData = require('./routes/UserData');

const VerifyfillData = require('./routes/VerifyFillData');
const OtpVerify = require('./routes/OtpVerify');
const LoginVerify = require('./routes/LoginVerify');
const Forgot = require('./routes/Forgot');
const Slider = require('./routes/Slider');
const SongFetch = require('./routes/SongFetch');
const InternationalTopHits = require('./routes/InternationalTopHits');
const Dance = require('./routes/Dance');
const SingerPlaylist = require('./routes/SingerPlaylist');
const Search = require('./routes/Search');
const ProfileData = require('./routes/ProfileData');
const AddToFavourite = require('./routes/AddToFavourite');

const corsOption={
    origin:'*',
    credentials:true,
    optionSuccessStatus:200
}

const dbOption={
    useNewUrlParser:true,
    useUnifiedTopology:true 
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors(corsOption))


app.use('/', Devotion);
app.use('/', Lofi);
app.use('/', Old);
app.use('/', Romantic);
app.use('/', Sad);
app.use('/', TopHits);
app.use('/', Otp);

app.use('/', UserData);

app.use('/', VerifyfillData);
app.use('/', OtpVerify);
app.use('/', LoginVerify);
app.use('/', Forgot);
app.use('/', Slider);
app.use('/', SongFetch);
app.use('/', InternationalTopHits);
app.use('/', Dance);
app.use('/', SingerPlaylist);
app.use('/', Search);
app.use('/', ProfileData);
app.use('/', AddToFavourite);

// app.use('/sliderimages', express.static('./public/image/Slider'));
// app.use('/singerplaylist', express.static('./public/image/Playlist'));
// app.use('/uploads',express.static('./uploads'))
// app.use('/tophitsimages', express.static('./public/image/TopHits'));
// app.use('/internationaltophits', express.static('./public/image/InternationalTopHits'));
// app.use('/romantic', express.static('./public/image/Romantic'));



const port=8000
mongoose.connect(process.env.DB_URL).then(()=>{
  console.log('DB Connect Succesfully..')
  
}).catch((err)=>{
    console.log(err)
})

const server=app.listen(port,()=>{
    console.log(`Server has been started on this ${port}`)
})