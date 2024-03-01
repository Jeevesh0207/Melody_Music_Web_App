import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom'
function Slider() {
    const NaviGate = useNavigate()
    const [NameData, setNameData] = useState([])
    const [Left, setLeft] = useState(1)
    const [Mid, setMid] = useState(2)
    const [Right, setRight] = useState(3)
    // const API = process.env.REACT_APP_BASE_URL
    const OpenSingerPlaylist = (Name) => {
        localStorage.setItem("PlayListURL", Name)
        NaviGate('/singerplaylist')
    }
    const LeftBtn = () => {
        const Length = NameData.length
        if (Left - 1 === 0) setLeft(Length)
        else setLeft(Left - 1)
        if (Mid - 1 === 0) setMid(Length)
        else setMid(Mid - 1)
        if (Right - 1 === 0) setRight(Length)
        else setRight(Right - 1)
        const item1 = document.getElementById('item1')
        const item2 = document.getElementById('item2')
        const item3 = document.getElementById('item3')
        item1.className = 'Box Leftanimation'
        item2.className = 'Box Leftanimation'
        item3.className = 'Box Leftanimation'
        setTimeout(() => {
            item1.className = 'Box'
            item2.className = 'Box'
            item3.className = 'Box'
        }, 1000)
    }
    const RightBtn = () => {
        const Length = NameData.length
        if (Left + 1 > Length) setLeft(1)
        else setLeft(Left + 1)
        if (Mid + 1 > Length) setMid(1)
        else setMid(Mid + 1)
        if (Right + 1 > Length) setRight(1)
        else setRight(Right + 1)
        const item1 = document.getElementById('item1')
        const item2 = document.getElementById('item2')
        const item3 = document.getElementById('item3')
        item1.className = 'Box Rightanimation'
        item2.className = 'Box Rightanimation'
        item3.className = 'Box Rightanimation'
        setTimeout(() => {
            item1.className = 'Box'
            item2.className = 'Box'
            item3.className = 'Box'
        }, 1000)
    }
    useEffect(() => {
        const GetData = async () => {
            await axios.get(process.env.REACT_APP_BASE_URL + '/slider').then((res) => {
                setNameData(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
        GetData()
    }, [])
    
    return (
        <div className='Slider'>
            <div className='container '>
                <i className="fa-solid fa-chevron-left" onClick={LeftBtn}></i>
                <div className='Box ' id='item1'>
                    {
                        NameData.map((item) => {
                            return (
                                <div className='Name' key={item.id} onClick={() => {
                                    OpenSingerPlaylist(NameData[Left - 1].Path)
                                }}>
                                    <h1>
                                        {
                                            (item.id === Left) && item.Name
                                        }
                                    </h1>
                                </div>
                            )
                        })
                    }
                    {/* <img src={API + '/sliderimages/' + Left + '.jpg'} alt='jpg'></img> */}
                    <LazyLoadImage
                        width='100%'
                        height='100%'
                        src={`${require('../../img/Slider/'+Left+'.jpg')}`}
                        alt='jpg'
                        effect="blur"
                    />
                </div>
                <div className='Box ' id='item2'>
                    {
                        NameData.map((item) => {
                            return (
                                <div className='Name' key={item.id} onClick={() => {
                                    OpenSingerPlaylist(NameData[Mid - 1].Path)
                                }}>
                                    <h1>
                                        {
                                            (item.id === Mid) && item.Name
                                        }
                                    </h1>
                                </div>
                            )
                        })
                    }
                    {/* <img src={API + '/sliderimages/' + Mid + '.jpg'} alt='jpg'></img> */}
                    <LazyLoadImage
                        width='100%'
                        height='100%'
                        // src={API + '/sliderimages/' + Mid + '.jpg'}
                        src={`${require('../../img/Slider/'+Mid+'.jpg')}`}
                        alt='jpg'
                        effect="blur"
                    />
                </div>
                <div className='Box ' id='item3'>
                    {
                        NameData.map((item) => {
                            return (
                                <div className='Name' key={item.id} onClick={() => {
                                    OpenSingerPlaylist(NameData[Right - 1].Path)
                                }}>
                                    <h1>
                                        {
                                            (item.id === Right) && item.Name
                                        }
                                    </h1>
                                </div>
                            )
                        })
                    }
                    {/* <img src={API + '/sliderimages/' + Right + '.jpg'} alt='jpg'></img> */}
                    <LazyLoadImage
                        width='100%'
                        height='100%'
                        // src={API + '/sliderimages/' + Right + '.jpg'}
                        src={`${require('../../img/Slider/'+Right+'.jpg')}`}
                        alt='jpg'
                        effect="blur"
                    />
                </div>
                <i className="fa-solid fa-chevron-right"
                    onClick={RightBtn}></i>
            </div>
        </div>
    )
}

export default Slider