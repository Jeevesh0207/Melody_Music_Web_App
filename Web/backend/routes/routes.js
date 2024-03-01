const express = require('express');
const router = express.Router();
const app=express()
const Devotion = require('./Devotion');
const Lofi = require('./Lofi');
const Old = require('./Old');
const Romantic = require('./Romantic');
const Sad = require('./Sad');
const TopHits = require('./TopHits');
const Otp = require('./Otp');

const UserData = require('./UserData');

const VerifyfillData = require('./VerifyFillData');
const OtpVerify = require('./OtpVerify');
const LoginVerify = require('./LoginVerify');
const Forgot = require('./Forgot');
const Slider = require('./Slider');
const SongFetch = require('./SongFetch');
const InternationalTopHits = require('./InternationalTopHits');
const Dance = require('./Dance');
const SingerPlaylist = require('./SingerPlaylist');
const Search = require('./Search');
const ProfileData = require('./ProfileData');
const AddToFavourite = require('./AddToFavourite');

router.get('/', (req, res) => {
    res.send("<h1>I am Home</h1>")
});

router.use('/', Devotion);
router.use('/', Lofi);
router.use('/', Old);
router.use('/', Romantic);
router.use('/', Sad);
router.use('/', TopHits);
router.use('/', Otp);

router.use('/', UserData);

router.use('/', VerifyfillData);
router.use('/', OtpVerify);
router.use('/', LoginVerify);
router.use('/', Forgot);
router.use('/', Slider);
router.use('/', SongFetch);
router.use('/', InternationalTopHits);
router.use('/', Dance);
router.use('/', SingerPlaylist);
router.use('/', Search);
router.use('/', ProfileData);
router.use('/', AddToFavourite);

router.use('/sliderimages', express.static('./public/image/Slider'));
router.use('/singerplaylist', express.static('./public/image/Playlist'));
router.use('/uploads',express.static('./uploads'))
router.use('/tophitsimages', express.static('./public/image/TopHits'));
router.use('/internationaltophits', express.static('./public/image/InternationalTopHits'));
router.use('/romantic', express.static('./public/image/Romantic'));


module.exports = router;
