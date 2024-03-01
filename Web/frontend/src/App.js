import './App.css';
import './Home.css'
import Home from './Components/Home';
import { Routes, Route} from 'react-router-dom'
import SignUp from './Components/SignUp';
import Otp from './Components/Otp';
import { useState } from 'react';
import Error from './Components/Error';
import Login from './Components/Login'
import Forgot from './Components/Forgot';
import SingerPlaylist from './Components/Home/SingerPlaylist';
import MusicPlayer from './Components/Home/MusicPlayer';
import Search from './Components/Search';
import Profile from './Components/Profile';
import { useAuth } from './Hook/Auth';
function App() {
  const Auth=useAuth()
  const [ReachOtp, setReachOtp] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search/>}/>
        <Route path='/singerplaylist' element={<SingerPlaylist/>}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/signup' element={<SignUp setReachOtp={setReachOtp} />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/signup/verifyotp' element={(!ReachOtp) ?
          <Error />
          : <Otp />} />
        <Route path='*' element={<Error />} />
      </Routes>
      {
        (Auth.isPlayer)&&<MusicPlayer/>
      }
      
    </div>
  );
}

export default App;
