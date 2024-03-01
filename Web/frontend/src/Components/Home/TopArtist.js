import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom'
function TopArtist() {
    const NaviGate=useNavigate()
    const [TopArtistData, setTopArtistData] = useState([])
    const API = process.env.REACT_APP_BASE_URL
    const ScrollMove = (val) => {
        const List = document.getElementsByClassName('TopArtistList')[0]
        List.scrollLeft = List.scrollLeft + val
    }
    const SetArtistDetail = async (Name) => {
        localStorage.setItem("PlayListURL",Name)
        NaviGate('/singerplaylist')
    }
    useEffect(() => {
        const FetchAllData = async () => {
            await axios.get(API + '/slider').then((res) => {
                setTopArtistData(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
        FetchAllData()

    }, [API])
    return (
        <div className='TopArtist TopHits'>
            <div className='Heading'>
                <h2>Top Artist</h2>
                <i className="fa-solid fa-circle-chevron-left" onClick={() => { ScrollMove(-180) }}></i>
                <i className="fa-solid fa-circle-chevron-right" onClick={() => { ScrollMove(180) }}></i>
            </div>
            <div className='TopArtistList List'>
                {
                    TopArtistData.map((item) => {
                        return (
                            <div className='ArtistBox' key={item.id}
                            onClick={()=>{
                                SetArtistDetail(item.Path)
                            }}
                            >
                                <div className='Pic'>
                                    <LazyLoadImage
                                        width='100%'
                                        height='100%'
                                        src={`${require('../../img/Playlist/'+item.Path+'.jpg')}`}
                                        // src={API + '/singerplaylist/' + item.Path + '.jpg'}
                                        alt='jpg'
                                        effect="blur"
                                    />
                                </div>
                                <p>{item.Name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopArtist