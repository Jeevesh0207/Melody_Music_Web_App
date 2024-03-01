import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../Hook/Auth'
import Loading from './Loading'
function Login() {
  const Auth=useAuth()
  const NaviGate = useNavigate()
  const [UserName, setUserName] = useState('')
  const [Password, setPassword] = useState('')
  const [isChecked, setisChecked] = useState(false)
  const [isLoading,setisLoading]=useState(false)
  const PVisFun = () => {
    let PassType = document.getElementById('PassVis')
    let PassEye = document.getElementById('PassVisLock')
    if (PassType.type === 'password') {
      PassType.type = 'text'
      PassEye.className = 'fa-solid fa-unlock'
    }
    else {
      PassType.type = 'password'
      PassEye.className = 'fa-solid fa-lock'
    }
  }
  const UserRed = () => {
    const UserRed = document.getElementById('Usercheckpara')
    UserRed.style.display = 'block'
    const Userinpt = document.getElementById('Usercheckinpt')
    Userinpt.style.border = '1.5px solid #FF3232'
  }
  const UserRemoveRed = () => {
    const UserRemoveRed = document.getElementById('Usercheckpara')
    UserRemoveRed.style.display = 'none'
    const UserRemoveinpt = document.getElementById('Usercheckinpt')
    UserRemoveinpt.style.border = 'none'
  }
  const PassRed = () => {
    const PassRed = document.getElementById('Passcheckpara')
    PassRed.style.display = 'block'
    const Passinpt = document.getElementById('PassVis')
    Passinpt.style.border = '1.5px solid #FF3232'
  }
  const PassRemoveRed = () => {
    const PassRemoveRed = document.getElementById('Passcheckpara')
    PassRemoveRed.style.display = 'none'
    const PassRemoveinpt = document.getElementById('PassVis')
    PassRemoveinpt.style.border = 'none'
  }
  const LoginFunction = async (e) => {
    setisLoading(true)
    e.preventDefault()
    if (UserName && Password && isChecked) {
      localStorage.username = UserName
      localStorage.password = Password
    }
    const Data = {
      UserName: UserName,
      Password: Password
    }
    await axios.post(process.env.REACT_APP_BASE_URL + '/loginverify', Data).then((res) => {
      if(res.data==='Wrong Username'){
        UserRed()
        setisLoading(false)
      }
      else if(res.data==='Wrong Password'){
        UserRemoveRed()
        PassRed()
        setisLoading(false)
      }
      else if(res.data==='Correct Password'){
        PassRemoveRed()
        Auth.SetUserName(UserName)
        localStorage.setItem('Token',UserName)
        NaviGate('/',{replace:true})
      }
      else{
        console.log('Kuch error hai')
      }
    }).catch((err) => {
      console.log(err)
    })

  }
  const SendToForgot=()=>{
    NaviGate('/forgot')
  }
  const SendToSignUp = () => {
    NaviGate('/signup')
  }
  useEffect(()=>{
    if(localStorage.getItem('Token')){
      NaviGate('/',{replace:true})
    }
  },[NaviGate])
  return (
    <div className='Login'>
      {
       (isLoading)&&<div className='LoaderPage'><Loading/></div>
      }
      <div className='Left'>

      </div>
      <div className='Right'>
        <div className='Container'>
          <h1>Log in your Account</h1>
          <form onSubmit={LoginFunction}>
            <div className='Row Username'>
            <p id='Usercheckpara'>Username does not exist</p>
              <i className="fa-solid fa-address-card"></i>
              <input type='text' placeholder='Username' required onChange={(e) => { setUserName(e.target.value) }}
              id='Usercheckinpt'></input>
            </div>
            <div className='Row Password'>
            <p id='Passcheckpara'>Your username and password does not match</p>
              <i className="fa-solid fa-key"></i>
              <input type='password' placeholder='Password' id='PassVis' required onChange={(e) => { setPassword(e.target.value) }}></input>
              <i className="fa-solid fa-lock" id='PassVisLock' onClick={PVisFun}></i>
            </div>
            <div className='forgetpass'>
              <div className='forgetLeft'>
                <input type='checkbox' onChange={(e) => { setisChecked(e.target.checked) }}></input>
                <p>Remember me</p>
              </div>
              <div className='forgetRight'>
                <span onClick={SendToForgot}>Forgot Password?</span>
              </div>
            </div>
            <div className='Row LoginBtn'>
              <div className='btn'>
                <button type='submit'>Login</button>
              </div>
              <div className='signup'>
                <p>Don't have an account?  <span onClick={SendToSignUp}> Create an account</span></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login