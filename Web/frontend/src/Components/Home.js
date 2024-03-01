import React, { useEffect } from 'react'
import Header from './Header'
import Slider from './Home/Slider'
import TopHits from './Home/TopHits'
import InternationalTopHits from './Home/InternationalTopHits'
import Romantic from './Home/Romantic'
import Dance from './Home/Dance'
import Sad from './Home/Sad'
import Old from './Home/Old'
import Lofi from './Home/Lofi'
import Devotion from './Home/Devotion'
import TopArtist from './Home/TopArtist'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Hook/Auth'

function Home() {
  const NaviGate = useNavigate()
  const Auth=useAuth()
  useEffect(() => {
    if (!localStorage.getItem('Token')) {
      Auth.setisPlayer(false)
      NaviGate('/signup', { replace: true })
    }
    else{
      Auth.setisPlayer(true)
    }
  }, [NaviGate,Auth])

  return (
    <div className='Home'>
      <Header />
      <Slider />
      <TopHits />
      <InternationalTopHits />
      <Romantic />
      <TopArtist />
      <Dance />
      <Sad />
      <Old />
      <Devotion />
      <Lofi />
      <Footer />
    </div>
  )
}

export default Home