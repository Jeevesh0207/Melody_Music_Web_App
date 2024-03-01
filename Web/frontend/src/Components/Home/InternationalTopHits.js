import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSongAuth } from '../../Hook/Song'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function InternationalTopHits() {
    const SongAuth = useSongAuth()
    const [InternationalTopHitsData, setInternationalTopHitsData] = useState([])
    const API = process.env.REACT_APP_BASE_URL
    const ScrollMove = (val) => {
        const List = document.getElementsByClassName('InternationalList')[0]
        List.scrollLeft = List.scrollLeft + val
    }
    const SetSongDetail = async(item) => {
        const Data = {
            Name: item.Name,
            Singer: item.Singer,
            id: item.id,
            ID: item.ID
        }
        localStorage.setItem("CurrentSongArray", JSON.stringify(InternationalTopHitsData))
        localStorage.setItem("MusicPlayerDetail", JSON.stringify(Data))
        SongAuth.setisSearch(false)
        await SongAuth.setBoolSong(true)
    }
    useEffect(() => {
        const FetchAllData = async () => {
            await axios.get(API + '/internationaltophits').then((res) => {
                setInternationalTopHitsData(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
        FetchAllData()

    }, [API])
    return (
        <div className='InternationalTopHits TopHits'>
            <div className='Heading'>
                <h2>International Top Hits</h2>
                <i className="fa-solid fa-circle-chevron-left" onClick={() => { ScrollMove(-180) }}></i>
                <i className="fa-solid fa-circle-chevron-right" onClick={() => { ScrollMove(180) }}></i>
            </div>
            <div className='InternationalList List'>
                {
                    InternationalTopHitsData.map((item) => {
                        return (
                            <div className='Box' key={item.id}>
                                <div className='Poster'>
                                    <div className='Play'>
                                        <i className="fa-solid fa-circle-play" onClick={() => {
                                            SetSongDetail(item)
                                        }}></i>
                                        <i className="fa-solid fa-circle-play" onClick={() => {
                                            SetSongDetail(item)
                                        }}></i>
                                    </div>
                                    {/* <img src={API+'/internationaltophits/'+item.id+'.jpg'} alt='png'></img> */}
                                    <LazyLoadImage
                                        width='100%'
                                        height='100%'
                                        // src={API + '/internationaltophits/' + item.id + '.jpg'}
                                        src={
                                            'https://i.ytimg.com/vi/'+item.ID+'/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBJYx7RKRnPEAogg1mN5GC-5UupA'
                                        }
                                        alt='jpg'
                                        effect="blur"
                                    />
                                </div>
                                <div className='Text'>
                                    <p>{item.Name}</p>
                                    <p>{item.Singer}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InternationalTopHits