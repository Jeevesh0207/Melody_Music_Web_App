const express = require('express')
const SongFetch = express.Router()
const ytdl = require("ytdl-core");
// const axios = require('axios');

SongFetch.post('/songfetch', async (req, res) => {
    console.log('Song Fetching Start..')
    const ID = req.body.ID
    let info = await ytdl.getInfo(ID);
    let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    res.send(audioFormats)


    // TotalCount += 1;
    // console.log(TotalCount)
    // const options = {
    //     method: 'GET',
    //     url: 'https://youtube-search-and-download.p.rapidapi.com/video',
    //     params: { id: ID },
    //     headers: {
    //         'X-RapidAPI-Key': process.env.X_RAPID_KEY,
    //         'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    //     }
    // };
    // try {
    //     const response = await axios.request(options);
    //     const Data = response.data.streamingData.adaptiveFormats
    //     const Length = Data.length

    //     res.send(Data[Length - 1])
    //     res.end()
    // } catch (error) {
    //     console.error(error);
    // }


    res.end()
})

module.exports = SongFetch