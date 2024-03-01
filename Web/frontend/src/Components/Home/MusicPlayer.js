import React, { useEffect, useState } from 'react'
import { useSongAuth } from '../../Hook/Song'
import { getAudioDurationInSeconds } from "@remotion/media-utils";
import axios from 'axios'
function MusicPlayer() {
    const SongAuth = useSongAuth()
    const [currentDuration, setcurrentDuration] = useState('00:00')
    const [currentIntVal, setcurrentIntVal] = useState(0)
    const [VolumeLevel, setVolumeLevel] = useState(50)
    const [LoadingVar, setLoadingVar] = useState(false)
    const [RandNum, setRandNum] = useState('')

    const AddToFavourite = async () => {
        const Data = {
            Name: SongAuth.SongName,
            SingerName: SongAuth.SingerName,
            ID: (SongAuth.SongID || SongAuth.SongURL),
            Url: (SongAuth.isSearch && SongAuth.SearchPicURL) || "",
            isSearch: SongAuth.isSearch,
            UserName: localStorage.getItem("Token")
        }
        await axios.post(process.env.REACT_APP_BASE_URL + '/addtofavourite', Data).then((res) => {
            const Heart = document.getElementById('Heart')
            if (Heart.className === 'fa-regular fa-heart') {
                Heart.className = 'fa-solid fa-heart fa-beat'
                Heart.style.color = '#ff5a66'
            }
            else {
                Heart.className = 'fa-regular fa-heart'
            }
            // console.log(res)
        }).catch((err) => {
            console.log(err)
        })

    }
    const NextSong = async (index) => {
        const TotalSongArray = JSON.parse(localStorage.getItem("CurrentSongArray"))
        const CurrentIndex = JSON.parse(localStorage.getItem("MusicPlayerDetail")).id
        const Length = TotalSongArray.length
        const CurrentNo = CurrentIndex + index - 1
        if (index > 0 && CurrentNo < Length) {
            const Data = {
                Name: TotalSongArray[CurrentNo].Name,
                Singer: TotalSongArray[CurrentNo].Singer,
                id: TotalSongArray[CurrentNo].id,
                ID: TotalSongArray[CurrentNo].ID
            }
            localStorage.setItem("MusicPlayerDetail", JSON.stringify(Data))
            SongAuth.setBoolSong(true)
        }
        else if (index < 0 && CurrentNo >= 0) {
            const Data = {
                Name: TotalSongArray[CurrentNo].Name,
                Singer: TotalSongArray[CurrentNo].Singer,
                id: TotalSongArray[CurrentNo].id,
                ID: TotalSongArray[CurrentNo].ID
            }
            localStorage.setItem("MusicPlayerDetail", JSON.stringify(Data))
            SongAuth.setBoolSong(true)
        }

    }
    const PlaySong = () => {
        const PlayBtn = document.getElementById('PlayBtn')
        const AudioId = document.getElementById('AudioId')
        if (PlayBtn.className === 'fa-solid fa-circle-play') {
            PlayBtn.className = 'fa-solid fa-circle-pause'
            AudioId.play()
        }
        else {
            PlayBtn.className = 'fa-solid fa-circle-play'
            AudioId.pause()
        }
    }
    const str_pad_left = (string, pad, length) => {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }
    const SetAudioDuration = (e) => {
        const audio = e.target
        const CurMinute = Math.floor(audio.currentTime / 60)
        const CurSecond = Math.floor(audio.currentTime - CurMinute * 60)
        const CurrentTime = str_pad_left(CurMinute, '0', 2) + ':' + str_pad_left(CurSecond, '0', 2)
        setcurrentDuration(CurrentTime)
        setcurrentIntVal(parseInt(audio.currentTime))
    }
    const SetRangeValue = (e) => {
        const audio = e.target.value
        const AudioId = document.getElementById('AudioId')
        AudioId.currentTime = e.target.value
        const CurMinute = Math.floor(audio / 60)
        const CurSecond = Math.floor(audio - CurMinute * 60)
        const CurrentTime = str_pad_left(CurMinute, '0', 2) + ':' + str_pad_left(CurSecond, '0', 2)
        setcurrentDuration(CurrentTime)
    }
    const VolumeChange = (e) => {
        const AudioId = document.getElementById('AudioId')
        AudioId.volume = parseInt(e.target.value) / 100
        setVolumeLevel(e.target.value)

    }
    const SetRepeatBool = () => {
        const SongShuffle = document.getElementById('SongShuffle')
        SongShuffle.style.color = '#ffffff'
        SongShuffle.className = 'fa-solid fa-shuffle'
        const SongRepeat = document.getElementById('SongRepeat')
        if (SongRepeat.style.color === 'rgb(255, 255, 255)' || SongRepeat.style.color === '') {
            SongRepeat.style.color = '#ff5a66'
            SongRepeat.className = 'fa-solid fa-repeat fa-beat-fade'

        }
        else {
            SongRepeat.style.color = '#ffffff'
            SongRepeat.className = 'fa-solid fa-repeat'
        }
    }
    const SetShuffleBool = () => {
        const SongShuffle = document.getElementById('SongShuffle')
        const SongRepeat = document.getElementById('SongRepeat')
        SongRepeat.className = 'fa-solid fa-repeat'
        SongRepeat.style.color = '#ffffff'

        if (SongShuffle.style.color === 'rgb(255, 255, 255)' || SongShuffle.style.color === '') {
            SongShuffle.style.color = '#ff5a66'
            SongShuffle.className = 'fa-solid fa-shuffle fa-beat-fade'

        }
        else {
            SongShuffle.style.color = '#ffffff'
            SongShuffle.className = 'fa-solid fa-shuffle'
        }
    }

    useEffect(() => {
        const SongDATA = JSON.parse(localStorage.getItem("CurrentSongArray")) || ''
        const MusicPlayerData = JSON.parse(localStorage.getItem("MusicPlayerDetail")) || ''
        const SetSongLinkByFetch = async () => {
            // setSongName(MusicPlayerData.Name)
            // setSingerName(MusicPlayerData.Singer)
            SongAuth.setBoolSong(false)
            setLoadingVar(true)
            // setSondID(MusicPlayerData.ID)
            SongAuth.SetSongData(MusicPlayerData.ID, MusicPlayerData.Name, MusicPlayerData.Singer)
            const Data = {
                ID: MusicPlayerData.ID
            }
            const AudioId = document.getElementById('AudioId')
            const PlayBtn = document.getElementById('PlayBtn')
            await axios.post(process.env.REACT_APP_BASE_URL + '/songfetch', Data).then(async (res) => {
                // console.log('Succesfully Fetch...')
                // console.log(res.data)

                // SongAuth.setSongURL(res.data.url)// For API

                SongAuth.setSongURL(res.data[0].url)
                setLoadingVar(false)
                SongAuth.setBoolSong(false)

                // const TotalDuration = await getAudioDurationInSeconds(res.data.url); // For API

                const TotalDuration = await getAudioDurationInSeconds(res.data[0].url);
                const TotMinute = Math.floor(TotalDuration / 60)
                const TotSecond = Math.floor(TotalDuration - TotMinute * 60)
                const TotalTime = str_pad_left(TotMinute, '0', 2) + ':' + str_pad_left(TotSecond, '0', 2)
                SongAuth.setoriginalDuration(TotalTime)
                SongAuth.settotalIntval(parseInt(TotalDuration))
                PlayBtn.className = 'fa-solid fa-circle-pause'
                AudioId.play()

            }).catch((err) => {
                console.log(err)
            })
        }
        const setRanID = async () => {
            // console.log("setRanID")
            if(SongDATA[RandNum].isSearch===true){
                const AudioId = document.getElementById('AudioId')
                const PlayBtn = document.getElementById('PlayBtn')
                const songurl = SongDATA[RandNum].ID
                SongAuth.SetSongData('', SongDATA[RandNum].Name, '')
                SongAuth.setSearchPicURL(SongDATA[RandNum].url)
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
                setRandNum('')
            }
            else{
                const Data = {
                    Name: SongDATA[RandNum].Name,
                    Singer: SongDATA[RandNum].Singer,
                    id: SongDATA[RandNum].id,
                    ID: SongDATA[RandNum].ID
                }
                localStorage.setItem("MusicPlayerDetail", JSON.stringify(Data))
                setRandNum('')
                await SongAuth.setBoolSong(true)
            }
        }
        if (RandNum) {
            // console.log('I am Setter of RandFun')
            setRanID()
        }
        if (SongAuth.BoolPlay) {
            SetSongLinkByFetch()
        }

    }, [SongAuth, RandNum])

    useEffect(() => {
        const Audio = document.getElementById('AudioId')
        const PlayBtn = document.getElementById('PlayBtn')
        const SongRepeat = document.getElementById('SongRepeat')
        const SongShuffle = document.getElementById('SongShuffle')
        Audio.volume = 0.5
        const SongDATA = JSON.parse(localStorage.getItem("CurrentSongArray"))
        Audio.addEventListener('ended', function () {
            Audio.currentTime = 0
            this.currentTime = 0
            PlayBtn.className = 'fa-solid fa-circle-play'
            if (SongRepeat.style.color === 'rgb(255, 90, 102)') {
                this.play()
                PlayBtn.className = 'fa-solid fa-circle-pause'
            }
            if (SongShuffle.style.color === 'rgb(255, 90, 102)') {
                // console.log('Hello')
                const index = Math.floor((Math.random() * SongDATA.length))
                // console.log(index)
                setRandNum(index)

            }
        })
    }, [])

    useEffect(() => {
        const checkisPresent = async () => {
            const Data = {
                ID: (SongAuth.SongID || SongAuth.SongURL),
                UserName: localStorage.getItem("Token")
            }
            await axios.post(process.env.REACT_APP_BASE_URL + '/addtofavourite/find', Data).then((res) => {
                const Heart = document.getElementById('Heart')
                if (res.data === "Present") {
                    Heart.className = 'fa-solid fa-heart fa-beat'
                    Heart.style.color = '#ff5a66'
                }
                else {
                    Heart.className = 'fa-regular fa-heart'
                    Heart.style.color = '#fff'
                }
                // console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
        checkisPresent()
    }, [SongAuth])

    return (

        <div className='MusicPlayer'>

            {
                (LoadingVar) &&
                <div className='MusicLoader'>
                    <div className='circle'>

                    </div>
                </div>
            }
            <audio src={SongAuth.SongURL} id='AudioId' onTimeUpdate={(e) => { SetAudioDuration(e) }} />
            <div className='PlayerLine'>
                <input type="range"
                    min="0"
                    max={SongAuth.totalIntVal}
                    value={currentIntVal}
                    onChange={SetRangeValue}
                ></input>
            </div>
            <div className='Container'>
                <div className='Left'>
                    <div className='songpic'>
                        {
                            (SongAuth.SongID && !SongAuth.isSearch) &&
                            <img
                                src={'https://i.ytimg.com/vi/' + SongAuth.SongID + '/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBJYx7RKRnPEAogg1mN5GC-5UupA'}
                                alt='png'
                            ></img>
                        }
                        {
                            (SongAuth.SearchPicURL && SongAuth.isSearch) &&
                            <img src={SongAuth.SearchPicURL} alt='png' ></img>
                        }
                        {
                            (!SongAuth.SongID && !SongAuth.SearchPicURL) &&
                            <img src={require('./img/music.png')} alt='png' ></img>
                        }
                    </div>
                    <div className='infosong'>
                        {
                            (SongAuth.SongName) ? <p>{SongAuth.SongName}</p> : <p></p>

                        }
                        {
                            (SongAuth.SingerName) ? <p>{SongAuth.SingerName}</p> : <p></p>
                        }
                    </div>
                </div>
                <div className='Mid'>
                    <div className='SBox L'>
                        <i className="fa-solid fa-shuffle" id='SongShuffle' onClick={() => {
                            (window.location.pathname !== '/search') && SetShuffleBool()
                        }}></i>
                    </div>
                    <div className='SBox M'>
                        <i className="fa-solid fa-backward-step" onClick={() => {
                            (window.location.pathname !== '/search') && NextSong(-1)
                        }}></i>
                        <i className="fa-solid fa-circle-play" onClick={() => {
                            if (SongAuth.SongID || SongAuth.SearchPicURL) {
                                PlaySong()
                            }
                        }} id='PlayBtn'></i>
                        <i className="fa-solid fa-forward-step" onClick={() => {
                            (window.location.pathname !== '/search') && NextSong(1)
                        }}></i>
                    </div>
                    <div className='SBox R'>
                        <i className="fa-solid fa-repeat" onClick={SetRepeatBool} id='SongRepeat'></i>
                    </div>
                </div>
                <div className='Right'>
                    <a href={SongAuth.SongURL}
                        // onClick={()=>{
                        //     (SongAuth.SongURL)&&DownloadFile(SongAuth.SongURL)
                        // }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-solid fa-cloud-arrow-down" id='Download'></i>
                    </a>
                    <i className="fa-regular fa-heart" id='Heart' onClick={() => {
                        (SongAuth.SongID || SongAuth.SearchPicURL) && AddToFavourite()
                    }}></i>
                    <p>
                        {
                            currentDuration + '/' + SongAuth.originalDuration
                        }
                    </p>
                    <div className='speaker'>
                        <i className="fa-solid fa-volume-high"></i>
                        <div className='volumebar'>
                            <input type='range'
                                min='0'
                                max='100'
                                value={VolumeLevel}
                                onChange={VolumeChange}
                            ></input>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MusicPlayer