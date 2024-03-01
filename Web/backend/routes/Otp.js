const express = require('express')
const nodemailer = require('nodemailer')
const Otp = express.Router()
const Schema = require('../model/Schemas')
require('dotenv/config')

Otp.get('/otp', (req, res) => {
    res.send("<h1>I am Otp</h1>")
})

Otp.post('/otp', async (req, res) => {
    const Email = req.body.Email
    const FName = req.body.FName
    const LName = req.body.LName
    var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let OTP = "";
    let len = string.length;
    for (let i = 0; i < 6; i++) {
        OTP += string[Math.floor(Math.random() * len)];
    }
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
        subject: 'One Time Password',
        html: `
        <h3>Account Verification Code</h3>
        <p>Hi ${FName + LName},</p>
        <p>Thank you for signing up for Melody Music! To verify your account, please enter the following code:</p>
        <h4>${OTP}</h4>
        <p>This code is valid for 10 minutes. If you don't verify your account within this time, you will need to request a new code.</p>
        <p>If you did not request this code, please ignore this email.</p>
        <p>Sincerely,</p>
        <p>Melody Music</p>
        `
    };
    Transport.sendMail(mailOption, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            const Fun = async () => {
                const otpdata=Schema.Otpdata
                const Emailpresent = await otpdata.findOne({ email: Email })
                if (Emailpresent) {
                    await otpdata.updateOne({email:Email},{$set:{otp:OTP}})
                }
                else {
                    const newotpSchema = new Schema.Otpdata({
                        email: Email,
                        otp: OTP
                    })
                    const saveotp = await newotpSchema.save()
                    if (saveotp) {
                        res.send('OTP addedd')
                    }
                    else {
                        res.send('Error')
                    }
                }
            }
            Fun()
        }
    })
})


Otp.post('/otp/forgot', async (req, res) => {
    const Email = req.body.Email
    var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let OTP = "";
    let len = string.length;
    for (let i = 0; i < 6; i++) {
        OTP += string[Math.floor(Math.random() * len)];
    }
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
        subject: 'One Time Password',
        html: `
        <h3>Account Verification Code</h3>
        <p>To verify your account, please enter the following code:</p>
        <h4>${OTP}</h4>
        <p>This code is valid for 10 minutes. If you don't verify your account within this time, you will need to request a new code.</p>
        <p>If you did not request this code, please ignore this email.</p>
        <p>Sincerely,</p>
        <p>Melody Music</p>
        `
    };
    Transport.sendMail(mailOption, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            const Fun = async () => {
                const otpdata=Schema.Otpdata
                const Emailpresent = await otpdata.findOne({ email: Email })
                if (Emailpresent) {
                    await otpdata.updateOne({email:Email},{$set:{otp:OTP}})
                }
                else {
                    const newotpSchema = new Schema.Otpdata({
                        email: Email,
                        otp: OTP
                    })
                    const saveotp = await newotpSchema.save()
                    if (saveotp) {
                        res.send('OTP addedd')
                    }
                    else {
                        res.send('Error')
                    }
                }
            }
            Fun()
        }
    })
})

module.exports = Otp