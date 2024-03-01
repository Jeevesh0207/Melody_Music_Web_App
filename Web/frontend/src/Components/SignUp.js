import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Hook/Auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'



function SignUp({ setReachOtp }) {
    const [FName, setFName] = useState('')
    const [LName, setLName] = useState('')
    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')
    const [UserName, setUserName] = useState('')
    const [ValPass, setValPass] = useState(false)
    const [LoadingVar,setLoadingVar]=useState(false)
    const Auth = useAuth()
    const NaviGate = useNavigate()
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
    const UserNameRed = () => {
        const UserNamecheck = document.getElementById('Usernamecheckpara')
        UserNamecheck.style.display = 'block'
        const Userinpt = document.getElementById('Usernamecheckinpt')
        Userinpt.style.border = '1.5px solid #FF3232'
    }
    const UserNameRemoveRed = () => {
        const UserNameRemovecheck = document.getElementById('Usernamecheckpara')
        UserNameRemovecheck.style.display = 'none'
        const UserRemoveinpt = document.getElementById('Usernamecheckinpt')
        UserRemoveinpt.style.border = 'none'
    }
    const EmailRed = () => {
        const EmailRed = document.getElementById('Emailcheckpara')
        EmailRed.style.display = 'block'
        const Emailinpt = document.getElementById('Emailcheckinpt')
        Emailinpt.style.border = '1.5px solid #FF3232'
    }
    const EmailRemoveRed = () => {
        const EmailRed = document.getElementById('Emailcheckpara')
        EmailRed.style.display = 'none'
        const EmailRemoveinpt = document.getElementById('Emailcheckinpt')
        EmailRemoveinpt.style.border = 'none'
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
    const FormData = async (e) => {
        setLoadingVar(true)
        e.preventDefault()
        const Data = {
            UserName: UserName,
            Email: Email
        }
        await axios.post(process.env.REACT_APP_BASE_URL + '/verifyfilldata', Data).then((res) => {
            if (res.data === 'Username already present') {
                setLoadingVar(false)
                UserNameRed()
            }
            else if (res.data === 'Email already present') {
                setLoadingVar(false)
                UserNameRemoveRed()
                EmailRed()
            }
            else {
                UserNameRemoveRed()
                EmailRemoveRed()
                if (ValPass) {
                    PassRemoveRed()
                    setLoadingVar(false)
                    Auth.setAllData(FName, LName, Email, Pass, UserName)
                    setReachOtp(true)
                    NaviGate('/signup/verifyotp')
                }
                else {
                    PassRed()
                    setLoadingVar(false)
                }
            }

        }).catch((err) => {
            console.log(err)
        })
    }
    const PassAuthOpen = () => {
        document.getElementsByClassName('PassAuthDiv')[0].style.display = 'flex'
    }
    const PassAuthClose = () => {
        document.getElementsByClassName('PassAuthDiv')[0].style.display = 'none'
    }

    useEffect(() => {

        const passValidCheck = () => {
            const subRow = document.getElementsByClassName('subRow')
            let Upper = Pass.match(/[A-Z]/)
            let Lower = Pass.match(/[a-z]/)
            let Num = Pass.match(/[0-9]/)
            let Special = Pass.match(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/)
            let PassLen = Pass.length >= 8 && Pass.length <= 48
            setValPass(Upper && Lower && Num && Special && PassLen)
            if (Lower) {
                subRow[0].children[0].style.color = 'green'
                subRow[0].children[1].style.color = 'green'
                subRow[0].children[0].name = 'checkmark-circle-outline'
            }
            else {
                subRow[0].children[0].style.color = 'red'
                subRow[0].children[1].style.color = 'red'
                subRow[0].children[0].name = 'close-circle-outline'
            }
            if (Upper) {
                subRow[1].children[0].style.color = 'green'
                subRow[1].children[1].style.color = 'green'
                subRow[1].children[0].name = 'checkmark-circle-outline'
            }
            else {
                subRow[1].children[0].style.color = 'red'
                subRow[1].children[1].style.color = 'red'
                subRow[1].children[0].name = 'close-circle-outline'
            }
            if (Num) {
                subRow[2].children[0].style.color = 'green'
                subRow[2].children[1].style.color = 'green'
                subRow[2].children[0].name = 'checkmark-circle-outline'
            }
            else {
                subRow[2].children[0].style.color = 'red'
                subRow[2].children[1].style.color = 'red'
                subRow[2].children[0].name = 'close-circle-outline'
            }
            if (Special) {
                subRow[3].children[0].style.color = 'green'
                subRow[3].children[1].style.color = 'green'
                subRow[3].children[0].name = 'checkmark-circle-outline'
            }
            else {
                subRow[3].children[0].style.color = 'red'
                subRow[3].children[1].style.color = 'red'
                subRow[3].children[0].name = 'close-circle-outline'
            }
            if (PassLen) {
                subRow[4].children[0].style.color = 'green'
                subRow[4].children[1].style.color = 'green'
                subRow[4].children[0].name = 'checkmark-circle-outline'
            }
            else {
                subRow[4].children[0].style.color = 'red'
                subRow[4].children[1].style.color = 'red'
                subRow[4].children[0].name = 'close-circle-outline'
            }
        }
        passValidCheck()
        if(localStorage.getItem('Token')){
            NaviGate('/',{replace:true})
        }
    }, [Pass,NaviGate])
    return (
        <div className='SignUp'>
            <div className='EverycloseDiv' onClick={PassAuthClose}></div>
            {
                (LoadingVar)&&<div className='LoaderPage'><Loading/></div>
            }
            <div className='Left'></div>
            <div className='Right'>
                <h1>Create your account</h1>
                <form onSubmit={FormData}>
                    <div className='Row Name'>
                        <div className='FName' onClick={PassAuthClose}>
                            <i className="fa-solid fa-address-card"></i>
                            <input type='text' placeholder='First Name' onChange={(e) => { setFName(e.target.value) }} required></input>
                        </div>
                        <div className='LName' onClick={PassAuthClose}>
                            <i className="fa-solid fa-address-card"></i>
                            <input type='text' placeholder='Last Name' onChange={(e) => { setLName(e.target.value) }} required></input>
                        </div>
                    </div>
                    <div className='Row UserName' onClick={PassAuthClose}>
                        <p id='Usernamecheckpara'>Username already exist, Please use another username</p>
                        <i className="fa-regular fa-id-badge"></i>
                        <input type='text' placeholder='Username' onChange={(e) => { setUserName(e.target.value) }} required
                            id='Usernamecheckinpt'></input>
                    </div>
                    <div className='Row Email' onClick={PassAuthClose}>
                        <p id='Emailcheckpara'>Email already exist, Please use another email</p>
                        <i className="fa-solid fa-envelope"></i>
                        <input type='email' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} required
                            id='Emailcheckinpt'></input>
                    </div>
                    <div className='Row Password' onClick={PassAuthOpen}>
                        <div className='PassAuthDiv'>
                            <p>Password Requirments:</p>
                            <div className='subRow'>
                                <ion-icon name="close-circle-outline"></ion-icon>
                                <p>At least 1 lowercase letter</p>
                            </div>
                            <div className='subRow'>
                                <ion-icon name="close-circle-outline"></ion-icon>
                                <p>At least 1 uppercase letter</p>
                            </div>
                            <div className='subRow'>
                                <ion-icon name="close-circle-outline"></ion-icon>
                                <p>At least 1 number</p>
                            </div>
                            <div className='subRow'>
                                <ion-icon name="close-circle-outline"></ion-icon>
                                <p>At least 1 special character</p>
                            </div>
                            <div className='subRow'>
                                <ion-icon name="close-circle-outline"></ion-icon>
                                <p>Must have 8-42 character</p>
                            </div>
                            <div className='down'>
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                        </div>
                        <p id='Passcheckpara'>Password ceiteria not matched</p>
                        <i className="fa-solid fa-key"></i>
                        <input type='password' placeholder='Password' onChange={(e) => { setPass(e.target.value); }} id='PassVis' required></input>
                        <i className="fa-solid fa-lock" onClick={PVisFun} id='PassVisLock'></i>
                    </div>
                    <div className='Row Term' onClick={PassAuthClose}>
                        <input type='checkbox' required></input>
                        <p>I agree to all Term, Privacy Policy and Fees</p>
                    </div>
                    <div className='Row Submit' onClick={PassAuthClose}>
                        <div className='btn'>
                            <button type='submit' id='SignUpBtn'>Sign Up</button>
                        </div>
                        <div className='LoginBtn' onClick={PassAuthClose}>
                            <p>Already have an account? </p>
                            <Link to='/login' replace='true'>
                                Login here
                            </Link>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp

