import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'
function Forgot() {
    const NaviGate = useNavigate()
    const [Email, setEmail] = useState('')
    const [userotp, setuserotp] = useState('')
    const [VerifyEmail, setVerifyEmail] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    const SendToLogin = () => {
        NaviGate('/login', { replace: true })
    }
    const EmailRed = () => {
        const EmailRed = document.getElementById('Emailcheckpara')
        EmailRed.style.display = 'block'
        const Emailinpt = document.getElementById('Emailcheckinpt')
        Emailinpt.style.border = '1.5px solid #FF3232'
    }
    const EmailRemoveRed = () => {
        const EmailRemoveRed = document.getElementById('Emailcheckpara')
        EmailRemoveRed.style.display = 'none'
        const EmailRemoveinpt = document.getElementById('Emailcheckinpt')
        EmailRemoveinpt.style.border = 'none'
    }
    const GenerateOtp = async () => {
        const Data = {
            Email: Email
        }
        await axios.post(process.env.REACT_APP_BASE_URL + '/otp/forgot', Data).then((res) => {
            // console.log('OTP Generated...')
        }).catch((err) => {
            console.log(err)
        })
    }
    const SendToForgot = () => {
        setVerifyEmail(true)
        NaviGate('/forgot', { replace: true })
    }
    const SendPassinEmail = async (e) => {
        e.preventDefault()
        setisLoading(true)
        const Data = {
            Email: Email,
            UserOtp: userotp
        }
        await axios.post(process.env.REACT_APP_BASE_URL + '/verifyotp/forgot', Data).then((res) => {
            console.log(res)
            if (res.data === 'Done') {
                setisLoading(false)
                EmailRemoveRed()
                setVerifyEmail(false)
                NaviGate('/login', { replace: true })
            }
            else if (res.data === 'Wrong Otp') {
                setisLoading(false)
                EmailRed()
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    const Send = async (e) => {
        e.preventDefault()
        setisLoading(true)
        const Data = {
            Email: Email
        }
        await axios.post(process.env.REACT_APP_BASE_URL + '/forgot/verifyemail', Data).then((res) => {
            // console.log(res.data)
            if (res.data === 'Valid') {
                setisLoading(false)
                EmailRemoveRed()
                setVerifyEmail(true)
                GenerateOtp()
            }
            else {
                setisLoading(false)
                EmailRed()
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className='Forgot'>
            {
                (isLoading) && <div className='LoaderPage'><Loading /></div>
            }
            <div className='Container'>
                <img src={require('../img/Forgot_1.png')} alt='png'></img>
                {
                    (VerifyEmail) ?
                        <>
                            <h1>Password Recovery Code</h1>
                            <div className='Headtext'>
                                <p>Verify your email and we will send your password to associate email address</p>
                            </div>
                            <form onSubmit={SendPassinEmail}>
                                <div className='Row Email otpverify'>
                                    <p id='Emailcheckpara'>Wrong Otp</p>
                                    <input type='text' placeholder='••••••' required
                                        onChange={(e) => { setuserotp(e.target.value) }}
                                        id='Emailcheckinpt'></input>
                                </div>
                                <div className='Row Send'>
                                    <button type='submit'>Verify</button>
                                </div>
                                <div className='info'>
                                    <p>Did not receive the email? Check our spam folder or <br /> <span onClick={SendToForgot}>Try another email address</span></p>
                                </div>
                            </form>
                        </>
                        :
                        <>
                            <h1>Recovery Password</h1>
                            <div className='Headtext'>
                                <p>Enter the email address associated with your account</p>
                            </div>
                            <form onSubmit={Send}>
                                <div className='Row Email'>
                                    <p id='Emailcheckpara'>No account associate with this email address</p>
                                    <i className="fa-solid fa-address-card"></i>
                                    <input type='email' placeholder='Enter your email' required
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        id='Emailcheckinpt'></input>
                                </div>
                                <div className='Row Send'>
                                    <button type='submit'>Send</button>
                                </div>
                                <div className='info'>
                                    <p>Already have an account? <span onClick={SendToLogin}>Log in</span></p>
                                </div>
                            </form>
                        </>
                }
            </div>
        </div>
    )
}

export default Forgot