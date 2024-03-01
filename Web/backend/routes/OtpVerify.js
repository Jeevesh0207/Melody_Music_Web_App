const express = require('express')
const OtpVerify = express.Router()
const Schema = require('../model/Schemas')
const nodemailer = require('nodemailer')
require('dotenv/config')

OtpVerify.post('/verifyotp', async (req, res) => {
    const FName = req.body.FName
    const LName = req.body.LName
    const Email = req.body.Email
    const UserName = req.body.UserName
    const Password = req.body.Password
    const UserOtp = req.body.UserOtp
    const otpdata = Schema.Otpdata
    const RealOtp = await otpdata.findOne({ email: Email })
    if (RealOtp.otp) {
        if (RealOtp.otp === UserOtp) {
            const newUser = new Schema.Users({
                fname: FName,
                lname: LName,
                email: Email,
                username: UserName,
                pass: Password
            })
            const savedata = await newUser.save()
            if(savedata){
                res.send('Correct Otp')
            }    
        }
        else{
            res.send('Wrong Otp')
        }
    }

    res.end()

})

OtpVerify.post('/verifyotp/forgot', async (req, res) => {
    const Email = req.body.Email
    const UserOtp = req.body.UserOtp
    const otpdata = Schema.Otpdata
    const user=Schema.Users
    const RealOtp = await otpdata.findOne({ email: Email })
    if (RealOtp) {
        if (RealOtp.otp === UserOtp) {
            const RealPassword= await user.findOne({email:Email})
            let Transport = await nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.USER_ID,
                    pass: process.env.PASS
                }
            });
            Transport.verify((error) => {
                if (error) {
                    console.log('Error... ' + error)
                }
                else {
                    console.log('Ready To Send')
                }
            });
        
            let mailOption = {
                from: 'testmail002007@gmail.com',
                to: Email,
                subject: 'Your Password Reset Request',
                html: `
                <h3>Your Password Reset Request</h3>
                <p>We hope this email finds you well. We received a request to reset the password associated with your account on Melody Music</p>
                <p>This is your password. Please keep it safe</p>
                <h4>${RealPassword.pass}</h4>
                <p>Sincerely,</p>
                <p>Melody Music</p>
                `
            };
            Transport.sendMail(mailOption, (error) => {
                if (error) {
                    res.json({ status: "ERROR" });
                } else {
                    res.send('Done')
                }
            }) 
        }
        else{
            res.send('Wrong Otp')
        }
    }

})

module.exports = OtpVerify