const express = require('express')
const Search = express.Router()
const axios = require('axios')
require('dotenv/config')

Search.post('/search', async (req, res) => {
    const Query = req.body.Search
    const headers = {
        Accept: 'application/json',
    };
    const URL = "https://musicapi.x007.workers.dev/search?q=" + Query + "&searchEngine=mtmusic"
    await axios.get(URL, { params: headers }).then((result) => {
        return res.send(JSON.stringify(result.data))
    }).catch((err) => {
        console.log(err)
    })
    res.end()
})

module.exports = Search