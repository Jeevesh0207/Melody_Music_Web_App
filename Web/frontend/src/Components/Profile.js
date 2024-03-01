import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Hook/Auth'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { getAudioDurationInSeconds } from "@remotion/media-utils";
import axios from 'axios'
import Loading from './Loading'
import { useSongAuth } from '../Hook/Song'
function Profile() {
    const Auth = useAuth()
    const SongAuth = useSongAuth()
    const NaviGate = useNavigate()
    const [FName, setFName] = useState('')
    const [LName, setLName] = useState('')
    const [imgURL, setimgURL] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const [FavSong, setFavSong] = useState([])

    const str_pad_left = (string, pad, length) => {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }
    const PlaySong = async (item, id) => {
        if (item.isSearch) {
            const AudioId = document.getElementById('AudioId')
            const PlayBtn = document.getElementById('PlayBtn')
            const songurl = item.ID
            SongAuth.SetSongData('', item.Name, '')
            SongAuth.setSearchPicURL(item.url)
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
            localStorage.setItem("CurrentSongArray", JSON.stringify(FavSong))
        }
        else {
            const Data = {
                Name: item.Name,
                Singer: item.SingerName,
                ID: item.ID,
                id: id + 1
            }
            localStorage.setItem("CurrentSongArray", JSON.stringify(FavSong))
            localStorage.setItem("MusicPlayerDetail", JSON.stringify(Data))
            SongAuth.setisSearch(false)
            SongAuth.setBoolSong(true)
        }
    }

    // const OpenSetting = () => {
    //     const EditBanner = document.getElementsByClassName('EditBanner')[0]
    //     const FirstNameID = document.getElementById('FirstNameID')
    //     const LastNameID = document.getElementById('LastNameID')
    //     FirstNameID.value = Auth.FName
    //     LastNameID.value = Auth.LName
    //     EditBanner.style.display = 'flex'
    //     setFName(Auth.FName)
    //     setLName(Auth.LName)
    // }
    const LogOut = () => {
        localStorage.removeItem("Token")
        window.location.reload()
    }
    const CloseSetting = () => {
        const EditBanner = document.getElementsByClassName('EditBanner')[0]
        EditBanner.style.display = 'none'
    }

    const DataSubmit = async (e) => {
        CloseSetting()
        setisLoading(true)
        e.preventDefault()
        if (imgURL) {
            // console.log("With Image Call")
            const data = new FormData()
            data.append("FName", FName)
            data.append("LName", LName)
            data.append("image", imgURL)
            data.append("UserName", localStorage.getItem("Token"))
            await axios.post(process.env.REACT_APP_BASE_URL + '/userdata/update', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then((res) => {
                // console.log(res.data)
                window.location.reload()
                setisLoading(false)
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            // console.log("Only data Call")
            const Data = {
                FName: FName,
                LName: LName,
                UserName: localStorage.getItem("Token")
            }
            await axios.post(process.env.REACT_APP_BASE_URL + '/userdata/updatedata', Data).then((res) => {
                // console.log(res.data)
                setisLoading(false)
                window.location.reload()
            }).catch((err) => {
                console.log(err)
            })

        }
    }

    useEffect(() => {
        if (!localStorage.getItem('Token')) {
            Auth.setisPlayer(false)
            NaviGate('/signup', { replace: true })
        }
        else {
            Auth.setisPlayer(true)
        }
    }, [NaviGate, Auth])

    useEffect(() => {
        const FetchData = async () => {
            setisLoading(true)
            const Data = {
                userName: localStorage.getItem('Token')
            }
            await axios.post(process.env.REACT_APP_BASE_URL + '/profiledata', Data).then((res) => {
                const Data = res.data
                Auth.setAllData(Data.fname, Data.lname, Data.email, Data.pass, Data.userName, Data.img.path)
                setFavSong(Data.favSong)
                setisLoading(false)
            }).catch((err) => {
                console.log(err)
            })
        }
        FetchData()
    }, [Auth])


    return (
        <>
            <Header />
            {
                // console.log(FavSong)
            }
            <div className='Profile'>
                {
                    (isLoading) && <div className='LoaderPage'><Loading /></div>
                }
                <div className='EditBanner'>
                    <div className='container'>
                        <div className='close'>
                            <i className="fa-solid fa-circle-xmark" onClick={CloseSetting}></i>

                        </div>
                        <div className='Top'>
                            <div className='Pic'>
                                <i className="fa-solid fa-file"></i>
                                <p>Upload</p>
                                <input type='file' onChange={(e) => {
                                    setimgURL(e.target.files[0])
                                }} name='file'></input>
                                {
                                    (imgURL) &&
                                    <LazyLoadImage
                                        width='100%'
                                        height='100%'
                                        src={URL.createObjectURL(imgURL)}
                                        alt='jpg'
                                        effect="blur"
                                    />
                                }
                            </div>
                        </div>
                        <div className='Bottom'>
                            <form onSubmit={DataSubmit}>
                                <div className='Row Name'>
                                    <div className='FName'>
                                        <i className="fa-solid fa-address-card"></i>
                                        <input type='text' placeholder='First Name' id='FirstNameID' onChange={(e) => {
                                            setFName(e.target.value)
                                        }}></input>
                                    </div>
                                    <div className='LName'>
                                        <i className="fa-solid fa-address-card"></i>
                                        <input type='text' placeholder='Last Name' id='LastNameID' onChange={(e) => {
                                            setLName(e.target.value)
                                        }}></input>
                                    </div>
                                </div>
                                <div className='Row'>
                                    <button type='submit'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <div className='TopBanner'>
                    {/* <i className="fa-solid fa-gear" onClick={OpenSetting}></i> */}
                    <i className="fa-solid fa-right-from-bracket" onClick={LogOut}></i>
                    <div className='Pic'>
                        {/* {
                            (Auth.imagepath) ?
                                <LazyLoadImage
                                    width='100%'
                                    height='100%'
                                    src={
                                        process.env.REACT_APP_BASE_URL + '/' + Auth.imagepath
                                    }
                                    alt='jpg'
                                    effect="blur"
                                /> :
                                
                        } */}
                        <LazyLoadImage
                            width='100%'
                            height='100%'
                            src={require('../img/profile.png')}
                            alt='png'
                            effect="blur"
                        />
                    </div>
                    <div className='Text'>
                        <h1>{Auth.FName} {Auth.LName}</h1>
                    </div>
                </div>
                <div className='BottomBanner'>
                    <div className='Head'>
                        <h2>Your Library</h2>
                        {/* <i className="fa-solid fa-heart"></i> */}
                        <i className="fa-solid fa-bookmark"></i>
                    </div>
                    <div className='SongList'>
                        {
                            FavSong.map((item, id) => {
                                return (
                                    <div className='Song' key={id}>
                                        <div className='Left'>
                                            <div className='No'>
                                                <p>{id + 1}</p>
                                            </div>
                                            <div className='Info'>
                                                <div className='smallpic'>
                                                    <div className='pic'>
                                                        {
                                                            (item.ID && !item.isSearch) &&
                                                            <img
                                                                src={'https://i.ytimg.com/vi/' + item.ID + '/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBJYx7RKRnPEAogg1mN5GC-5UupA'}
                                                                alt='png'
                                                            ></img>
                                                        }
                                                        {
                                                            (item.url && item.isSearch) &&
                                                            <img src={item.url} alt='png' ></img>
                                                        }
                                                        {
                                                            (!item.ID && !item.url) &&
                                                            <img src={require('../img/music.png')} alt='png' ></img>
                                                        }
                                                    </div>
                                                </div>
                                                <div className='detail'>
                                                    <p>{item.Name}</p>
                                                    <p>{item.SingerName}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Right'>
                                            <i className="fa-solid fa-circle-play" onClick={() => {
                                                PlaySong(item, id)
                                            }}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile