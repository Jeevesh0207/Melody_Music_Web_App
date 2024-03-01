import React, { useState,useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { getAudioDurationInSeconds } from "@remotion/media-utils";
import Loading from './Loading'
import { useSongAuth } from '../Hook/Song'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Hook/Auth';
function Search() {
    const Auth=useAuth()
    const SongAuth = useSongAuth()
    const NaviGate=useNavigate()
    const [SearchInput, setSearchInput] = useState('')
    const [SerachArray, setSearchArray] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const FetchAllData = async () => {
        // console.log("Search Calling")
        setisLoading(true)
        const Data = {
            Search: SearchInput
        }
        await axios.post(process.env.REACT_APP_BASE_URL + '/search', Data).then((res) => {
            const Data = res.data
            // console.log(Data)
            setSearchArray(Data.response)
            setisLoading(false)
            document.getElementById('inputval').value =""
        }).catch((err) => {
            console.log(err)
        })
    }
    const str_pad_left = (string, pad, length) => {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }
    const SetAndPlaySong = async(item) => {

        const AudioId = document.getElementById('AudioId')
        const PlayBtn = document.getElementById('PlayBtn')
        const songurl = "https://musicapi.x007.workers.dev/fetch?id=" + item.id
        SongAuth.SetSongData('', item.title, '')
        SongAuth.setSearchPicURL(item.img)
        SongAuth.setSongURL(songurl)
        SongAuth.setisSearch(true)
        const TotalDuration = await getAudioDurationInSeconds(songurl);
        const TotMinute = Math.floor(TotalDuration / 60)
        const TotSecond = Math.floor(TotalDuration - TotMinute * 60)
        const TotalTime = str_pad_left(TotMinute, '0', 2) + ':' + str_pad_left(TotSecond, '0', 2)
        SongAuth.setoriginalDuration(TotalTime)
        SongAuth.settotalIntval(parseInt(TotalDuration))
        PlayBtn.className = 'fa-solid fa-circle-pause'
        AudioId.play()
    }
    useEffect(()=>{
        if(!localStorage.getItem('Token')){
            Auth.setisPlayer(false)
            NaviGate('/signup',{replace:true})
        }
        else {
            Auth.setisPlayer(true)
        }
    },[NaviGate,Auth])
    return (
        <>
            <Header />
            <div className='Search'>
                <div className='SearchBar'>
                    <div className='Bar'>
                        <div className='picicon'>
                            <img src={require('../img/search.png')} alt='png'></img>
                        </div>
                        <input type='text' placeholder='What do u want to listen to?' onChange={(e) => {
                            setSearchInput(e.target.value)
                        }} id='inputval'></input>
                        <div className='Icon'>
                            <i className="fa-solid fa-magnifying-glass" onClick={FetchAllData}></i>
                        </div>
                    </div>
                </div>
                <div className='BackLoad'>
                    {
                        (isLoading) ? <div className='LoaderPage'><Loading /></div> :
                            <div className='Result'>
                                {

                                    SerachArray.map((item, id) => {
                                        return (
                                            <div className='Box' key={id}>
                                                <div className='Poster'>
                                                    <LazyLoadImage
                                                        width='100%'
                                                        height='100%'
                                                        src={item.img}
                                                        alt='jpg'
                                                        effect="blur"
                                                    />
                                                    <div className='Play'>
                                                        <i className="fa-solid fa-circle-play" onClick={() => {
                                                            SetAndPlaySong(item)
                                                        }}></i>
                                                        <i className="fa-solid fa-circle-play" onClick={() => {
                                                            SetAndPlaySong(item)
                                                        }}></i>
                                                    </div>
                                                </div>
                                                <div className='Text'>
                                                    <p>{item.title}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    }
                </div>

            </div>
        </>
    )
}

export default Search