import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Pressable,
    ImageBackground
} from 'react-native'
import React,{useState } from 'react';
import styles from './StyleSignIn'
import { useNavigation} from '@react-navigation/native'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import  LinearGradient  from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from "@env"
import Loading from '../Loading/Loading';
import { useAuth } from '../../Hook/Auth';

const SignIn = () => {
    const Auth=useAuth()
    const NaviGation = useNavigation()
    const [HidePass, SetHidePass] = useState(true)
    const [LockName, SetLockName] = useState("lock")

    const [UserName, SetUserName] = useState('')
    const [Password, SetPassword] = useState('')

    const [isUsername, SetisUsername] = useState(false)
    const [isPassword, SetisPassword] = useState(false)
    const [isUserNameVal, SetisUserNameVal] = useState(false)
    const [isPassswordVal, SetisPasswordVal] = useState(false)
    const [isLoading, SetisLoading] = useState(false)

    const SendToPage = (route) => {
        NaviGation.navigate(route)
    }
    const ShowPass = () => {
        if (LockName === "lock") {
            SetHidePass(false)
            SetLockName("unlock-alt")
        }
        else {
            SetHidePass(true)
            SetLockName("lock")
        }
    }
    const SignInButton = async () => {
        const checkusername = UserName.trim().length
        const checkpassword = Password.trim().length
        if (!checkusername) {
            SetisUsername(true)
        } else {
            SetisUsername(false)
        }
        if (!checkpassword) {
            SetisPassword(true)
        } else {
            SetisPassword(false)
        }
        if (checkusername && checkpassword) {
            SetisLoading(true)
            const Data = {
                UserName: UserName.trim(),
                Password: Password.trim()
            }
            // console.log(BASE_URL+'/verifysignin')
            await axios.post(BASE_URL + '/verifysignin', Data).then(async (res) => {
                const Result = res.data
                if (Result === "Invalid Username") {
                    SetisUserNameVal(true)
                    SetisLoading(false)
                } else if (Result === "Wrong") {
                    SetisUserNameVal(false)
                    SetisPasswordVal(true)
                    SetisLoading(false)
                }
                else {
                    SetisPasswordVal(false)
                    SetisLoading(false)
                    try{
                        await AsyncStorage.setItem('LoginToken', UserName)
                    }catch(err){
                        console.lof(err)
                    }
                    Auth.SetisLogin(true)
                    NaviGation.navigate('home')
                }
            }).catch((err) => {
                console.log(err)
            })
        }
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
            <View style={styles.container}>
                <Text style={styles.toptext}>Welcome Back</Text>
                <View style={styles.formcontainer}>
                    <View style={styles.inputbox}>
                        {
                            (isUsername) ? <Text style={styles.inputvalidation}>Enter a valid username</Text> : (isUserNameVal) && <Text style={styles.inputvalidation}>Username does not exist</Text>
                        }
                        <FontAwesome
                            name="address-book" size={20} color="black"
                            style={styles.icon}
                        />
                        <TextInput
                            style={[styles.input, (isUsername || isUserNameVal) && { borderColor: 'red', borderWidth: 1 }]}
                            placeholder='Username'
                            placeholderTextColor={'#ccc'}
                            selectionColor={'#f37646'}
                            onChangeText={SetUserName}
                            value={UserName}
                        />
                    </View>
                    <View style={styles.inputbox}>
                        {
                            (isPassword) ? <Text style={styles.inputvalidation}>Enter a valid password</Text> :
                                (isPassswordVal) && <Text style={styles.inputvalidation}>Your username and password does not match</Text>
                        }
                        <FontAwesome5
                            name="key" size={18} color="black"
                            style={styles.icon}
                        />
                        <TextInput
                            style={[styles.input, (isPassword || isPassswordVal) && { borderColor: 'red', borderWidth: 1 }]}
                            placeholder='Password'
                            placeholderTextColor={'#ccc'}
                            selectionColor={'#f37646'}
                            secureTextEntry={HidePass}
                            onChangeText={SetPassword}
                            value={Password}
                        />
                        <FontAwesome
                            onPress={ShowPass}
                            name={LockName} size={24} color="black"
                            style={styles.icon2}
                        />
                    </View>
                    <View style={styles.forgetbox}>
                        <TouchableOpacity
                            onPress={() => { SendToPage('forgot') }}
                        >
                            <Text style={styles.forgettext}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View>

                        <TouchableOpacity style={[styles.button, styles.dspflex]}
                            onPress={() => SignInButton()}
                        >
                            <Text style={styles.btntext}>Sign In</Text>
                        </TouchableOpacity>
                        <View style={styles.alreadycontainer}>
                            <Text style={styles.accounttext}>Don't have an account?
                            </Text>
                            <TouchableOpacity
                                onPress={() => { SendToPage('signup') }}
                            >
                                <Text style={styles.loginheretext}>Create an account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default SignIn

