import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Loading from '../Loading'
import { Link} from "react-scroll";
import { useSongAuth } from '../../Hook/Song'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hook/Auth'
function SingerPlaylist() {
    const Auth=useAuth()
    const NaviGate=useNavigate()
    const SongAuth = useSongAuth()
    const [isLoading, setisLoading] = useState(false)
    const [SongData, setSongData] = useState([])
    const [Bio1, setNBio1] = useState('')
    const [Bio2, setNBio2] = useState('')
    const [SingerName, setSingerName] = useState('')
    const URL = localStorage.getItem("PlayListURL")
    const setandPlaySong = async (item) => {
        const Data = {
            Name: item.Name,
            Singer: item.Singer,
            id: item.id,
            ID: item.ID
        }
        localStorage.setItem("CurrentSongArray", JSON.stringify(SongData))
        localStorage.setItem("MusicPlayerDetail", JSON.stringify(Data))
        SongAuth.setisSearch(false)
        SongAuth.setBoolSong(true)
    }
    useEffect(() => {
        // console.log(process.env.REACT_APP_BASE_URL + '/singerplaylist/' + URL)
        const FetchData = async () => {
            setisLoading(true)
            await axios.get(process.env.REACT_APP_BASE_URL + '/singerplaylist/' + URL + 'info').then((res) => {
                const Data = res.data
                setNBio1(Data[0].para1)
                setNBio2(Data[0].para2)
                setSingerName(Data[0].Name)
            }).then((err) => {
                if(err!==undefined)
                console.log(err)
            })
            await axios.get(process.env.REACT_APP_BASE_URL + '/singerplaylist/' + URL).then((res) => {
                const Data = res.data
                setSongData(Data)
                setisLoading(false)
            }).then((err) => {
                if(err!==undefined)
                console.log(err)
            })
        }
        FetchData()
    }, [URL])

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])

    useEffect(() => {
        if (!localStorage.getItem('Token')) {
            Auth.setisPlayer(false)
            NaviGate('/signup', { replace: true })
        }
        else {
            Auth.setisPlayer(true)
        }
    }, [NaviGate, Auth])
    return (
        <>
            <Header />
            <div className='Playlist'>
                {
                    (isLoading) && <div className='LoaderPage'><Loading /></div>
                }
                <div className='SingerPlaylist'>

                    <div className='Left'>
                        <div className='Top'>
                            <div className='SingerProfile'>
                                
                                <LazyLoadImage
                                        width='100%'
                                        height='100%'
                                        src={`${require('../../img/Playlist/'+URL+'.jpg')}`}
                                        alt='jpg'
                                        effect="blur"
                                    />

                            </div>
                        </div>
                        <div className='Bottom'>
                            <p>{Bio1}</p>
                            <p>{Bio2}</p>
                            <div className='showmore'>
                                <Link
                                activeClass="active"
                                to="BottomBio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                    Show More
                                    <i className="fa-solid fa-circle-chevron-down"></i>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='Right'>
                        <div className='Top'>
                            <div className='Pic'>
                                <div className='SingerProfile'>
                                   
                                    <LazyLoadImage
                                        width='100%'
                                        height='100%'
                                        src={`${require('../../img/Playlist/'+URL+'.jpg')}`}
                                        // src={
                                        //     process.env.REACT_APP_BASE_URL + '/singerplaylist/' + URL + '.jpg'
                                        // }
                                        alt='jpg'
                                        effect="blur"
                                    />
                                </div>
                            </div>
                            <div className='Info'>
                                <h1>{SingerName}</h1>
                            </div>
                        </div>
                        <div className='Bottom'>
                            <div className='AllList'>
                                <div className='Box BoxD'>
                                    <div className='No'>
                                        <p>#</p>
                                    </div>
                                    <div className='SongDetail'>
                                        <p>TRACK</p>
                                    </div>
                                    <div className='Artist'>
                                        <p>ARTISTS</p>
                                    </div>
                                    <div className='Album'>
                                        <p>ALBUM</p>
                                    </div>
                                    <div className='Options'>
                                    </div>
                                </div>
                                {
                                    SongData.map((item) => {
                                        return (
                                            <div className='Box BoxHover' key={item.id}>
                                                <div className='No'>
                                                    <p>{item.id}</p>
                                                </div>
                                                <div className='SongDetail'>
                                                    <div className='SmallPic'>
                                                        <img
                                                            src={'https://i.ytimg.com/vi/' + item.ID + '/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBJYx7RKRnPEAogg1mN5GC-5UupA'}
                                                            alt='png'
                                                        >
                                                        </img>
                                                    </div>
                                                    <p>{item.Name}</p>
                                                </div>
                                                <div className='Artist'>
                                                    <p>
                                                        {item.Singer}
                                                    </p>
                                                </div>
                                                <div className='Album'>
                                                    <p>
                                                        {item.Album}
                                                    </p>
                                                </div>
                                                <div className='Options'>
                                                    <i className="fa-solid fa-circle-play"
                                                        onClick={() => {
                                                            setandPlaySong(item)
                                                        }}
                                                    ></i>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='SingerDetail' id='BottomBio'>
                    <div className='Container'>
                        <i className="fa-solid fa-quote-right"></i>
                        <p>{Bio1}</p>
                        <p>{Bio2}</p>
                        <i className="fa-solid fa-quote-left"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingerPlaylist