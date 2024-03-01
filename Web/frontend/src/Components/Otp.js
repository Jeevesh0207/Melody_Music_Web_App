import React, { useEffect, useState } from 'react'
import { useAuth } from '../Hook/Auth'
import axios from 'axios'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'

function Otp() {
    const Auth = useAuth()
    const NaviGate=useNavigate()
    const UserData = {
        Email: Auth.Email,
        FName: Auth.FName,
        LName: Auth.LName
    }
    const [userotp, setuserotp] = useState('')
    const [Click, setClick] = useState(true)
    const [LoadingVar,setLoadingVar]=useState(false)
    const GenerateOtp = async () => {
        setClick(false)
        await axios.post(process.env.REACT_APP_BASE_URL+'/otp', UserData).then((res) => {
            // console.log('OTP Generated...')
        }).catch((err) => {
            console.log(err)
        })
    }

    const OtpRed = () => {
        const OtpRed = document.getElementById('Otpcheckpara')
        OtpRed.style.display = 'block'
        const Otpinpt = document.getElementById('Otpcheckinpt')
        Otpinpt.style.border = '1.5px solid #FF3232'
    }
    const OtpRemoveRed = () => {
        const OtpRed = document.getElementById('Otpcheckpara')
        OtpRed.style.display = 'none'
        const OtpRemoveinpt = document.getElementById('Otpcheckinpt')
        OtpRemoveinpt.style.border = 'none'
    }

    const VerifyOTP = async () => {
        setLoadingVar(true)
        const Data = {
            FName: Auth.FName,
            LName: Auth.LName,
            Email: Auth.Email,
            UserName: Auth.UserName,
            Password: Auth.Pass,
            UserOtp:userotp
        }
        axios.post(process.env.REACT_APP_BASE_URL+'/verifyotp',Data).then((res)=>{
            if(res.data==='Wrong Otp'){
                OtpRed()
                setLoadingVar(false)
            }
            else if(res.data==='Correct Otp'){
                OtpRemoveRed()
                setLoadingVar(false)
                NaviGate('/login',{replace:true})
            }
        }).catch((err)=>{
            console.log(err)
        })
    }


    
    useEffect(() => {
        const handlePopstate = () => {
            if (window.location.pathname === '/signup/verifyotp') {
                window.history.replaceState(null, document.title, '/signup');
            }
        };
        handlePopstate()
    }, []);

    return (
        <div className='Otp'>
            {
                (LoadingVar)&&<div className='LoaderPage'><Loading/></div>
            }
            <div className='Container'>
                <div className='image'>
                </div>
                <h2>Verification</h2>
                <p>
                    Yow will get a OTP via email on
                </p>
                <p>
                    {
                        (Auth.Email) ? ' ' + Auth.Email : ' email'
                    }
                </p>
                {
                    (Click) ? 
                    <div className='clickforotp'>
                         <button onClick={GenerateOtp}>Generate OTP</button>   
                    </div> : 
                    <>
                        < div className='code'>
                            <div className='inpt'>
                            <p id='Otpcheckpara'>Wrong Otp</p>
                                <input type='text' placeholder='••••••' onChange={(e) => {
                                    setuserotp(e.target.value)
                                }}
                                id='Otpcheckinpt'></input>
                            </div>
                        </div>
                        <div className='btn'>
                            <button onClick={VerifyOTP}>Verify</button>
                        </div>
                    </>

                }
                <div className='againotp'>
                    <p>Did't receive the verfication OTP?
                        <span onClick={GenerateOtp}>Resend again</span>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Otp