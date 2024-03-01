import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Pressable,
    ImageBackground
} from 'react-native'

import styles from './StyleOtp'
import { useNavigation } from '@react-navigation/native'
import { StackActions } from '@react-navigation/native';
import { LinearGradient } from 'react-native-linear-gradient'
import { useState } from 'react';
import { useAuth } from '../../Hook/Auth';
import axios from 'axios';
import Loading from '../Loading/Loading'
import { BASE_URL } from "@env"

const Otp = ({ route }) => {
    const Auth = useAuth()
    const NaviGation = useNavigation()
    const { Route } = route.params
    const [UserOtp, SetUserOtp] = useState(false)
    const [isOtp, SetisOtp] = useState(false)
    const [isVerify, SetisVerify] = useState(false)
    const [isforgot, Setisforgot] = useState(false)
    const [isSomething, SetisSomething] = useState(false)
    const [isGenerateOtp, SetisGenerateOtp] = useState(false)
    const [isLoading, SetisLoading] = useState(false)

    const GenerateOtp = async () => {
        SetisLoading(true)
        const Data = {
            Name: Auth.Name,
            Email: Auth.Email,
        }
        await axios.post(BASE_URL + '/generateotp', Data).then((res) => {
            SetisGenerateOtp(true)
            SetisLoading(false)
        }).catch((err) => {
            console.log(err)
        })

    }

    const VerifyOtp = async () => {
        SetisLoading(true)
        const Data = {
            Name: Auth.Name,
            UserName: Auth.UserName,
            Email: Auth.Email,
            Password: Auth.Password,
            UserOtp: UserOtp,
            Route: Route
        }
        await axios.post(BASE_URL + '/verifyotp', Data).then((res) => {
            const Result = res.data
            // console.log(Result)
            if (Result === "Wrong Otp") {
                SetisOtp(true)
                SetisLoading(false)
            }
            else if (Result === "Error") {
                SetisOtp(false)
                SetisSomething(true)
                SetisLoading(false)
            }
            else {
                if (Route === "signup") {
                    SetisSomething(false)
                    SetisLoading(false)
                    SetisVerify(true)
                    setTimeout(() => {
                        NaviGation.dispatch(StackActions.popToTop())
                        NaviGation.navigate('signin')
                    }, 5000)
                }
                if (Route === "Forgot") {
                    SetisLoading(false)
                    Setisforgot(true)
                    setTimeout(() => {
                        NaviGation.navigate('signin')
                    }, 5000)
                }
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <ImageBackground
            source={require('../../assets/img/SignUp1.jpeg')}
            style={styles.bgimage}
        >
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.6)', 'transparent']}
                style={styles.lineargradient}
            />
            {
                (isLoading) && <Loading />
            }
            {
                (isVerify) ?
                    <View style={styles.verifycontainer}>
                        <Text style={styles.verifytoptext}>Congratulations!</Text>
                        <Text style={styles.verifyinfo}>Your account has been successfully created</Text>
                        <Text style={styles.verifyinfo}>Redirecting to Sign In page in 5 seconds...</Text>
                    </View>
                    :
                    (isforgot) ?
                        <View style={styles.verifycontainer}>
                            <Text style={styles.verifytoptext}>Congratulations!</Text>
                            <Text style={styles.verifyinfo}>An email with instructions to reset your password has been sent.</Text>
                            <Text style={styles.verifyinfo}>Redirecting to Sign In page in 5 seconds...</Text>
                        </View>
                        :
                        <View style={styles.container}>
                            <Text style={styles.toptext}>Verification</Text>
                            <Text style={styles.topinfo}>Yow will get a OTP via email on </Text>
                            <Text style={[styles.topinfo, styles.topinfoemail]}>{Auth.Email}</Text>
                            {
                                (isGenerateOtp) ?
                                    <View style={styles.formcontainer(200)}>
                                        <View style={styles.inputbox}>
                                            {
                                                (isOtp) ? <Text style={styles.inputvalidation}>
                                                    Wrong Otp</Text> : (isSomething) && <Text style={styles.inputvalidation}>
                                                        Something went wrong</Text>
                                            }
                                            <TextInput
                                                style={[styles.input, (isOtp) && { borderColor: 'red', borderWidth: 1 }]}
                                                placeholder='••••••'
                                                placeholderTextColor={'#ccc'}
                                                selectionColor={'#f37646'}
                                                onChangeText={SetUserOtp}
                                            />
                                        </View>
                                        <View>
                                            <TouchableOpacity style={[styles.button, styles.dspflex]}
                                                onPress={() => { VerifyOtp() }}
                                            >
                                                <Text style={styles.btntext}>Verify</Text>
                                            </TouchableOpacity>
                                            <View style={styles.alreadycontainer}>
                                                <Text style={styles.accounttext}>Did't receive the verfication OTP?
                                                </Text>
                                                <TouchableOpacity
                                                    onPress={() => { GenerateOtp() }}
                                                >
                                                    <Text style={styles.loginheretext}>Resend again</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View> :
                                    <View style={styles.formcontainer(100)}>
                                        <View>
                                            <TouchableOpacity style={[styles.button, styles.dspflex]}
                                                onPress={() => { GenerateOtp() }}
                                            >
                                                <Text style={styles.btntext}>Generate Otp</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            }
                        </View>
            }
        </ImageBackground>
    )
}

export default Otp