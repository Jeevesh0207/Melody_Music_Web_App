import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Pressable,
    ImageBackground
} from 'react-native'

import styles from './StyleSignUp'
import { useNavigation } from '@react-navigation/native'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import  LinearGradient  from 'react-native-linear-gradient'
import { useState } from 'react';
import { BASE_URL } from "@env"
import axios from 'axios';
import { useAuth } from '../../Hook/Auth';
import Loading from '../Loading/Loading';


const SignUp = () => {
    const Auth = useAuth()
    const NaviGation = useNavigation()
    const [HidePass, SetHidePass] = useState(true)
    const [LockName, SetLockName] = useState("lock")

    const [Name, SetName] = useState('')
    const [Email, SetEmail] = useState('')
    const [UserName, SetUserName] = useState('')
    const [Password, SetPassword] = useState('')

    const [isName, SetisName] = useState(false)
    const [isUsername, SetisUsername] = useState(false)
    const [isEmail, SetisEmail] = useState(false)
    const [isPassword, SetisPassword] = useState(false)
    const [isLoading, SetisLoading] = useState(false)

    const [isUsernameVal, SetisUsernameVal] = useState(false)
    const [isEmailVal, SetisEmailVal] = useState(false)

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

    const SignUpButton = async () => {
        const emailRegex = /^[^\s@]+@(gmail\.com|outlook\.com)$/;
        const checkName = Name.trim().length
        const checkusername = UserName.trim().length
        const checkemail=emailRegex.test(Email)
        const checkpassword = Password.trim().length
        if(!checkName) {
            SetisName(true)
        }else{
            SetisName(false)
        }
        if (!checkusername) {
            SetisUsername(true)
        }else{
            SetisUsername(false)
        }
        if (!checkemail) {
            SetisEmail(true)
        }else{
            SetisEmail(false)
        }
        if (!checkpassword) {
            SetisPassword(true)
        }else{
            SetisPassword(false)
        }
        if(checkName && checkusername && checkemail && checkpassword){
            SetisLoading(true)
            const Data = {
                Email: Email.trim(),
                UserName: UserName.trim(),
            }
            await axios.post(BASE_URL + "/checkfilldata", Data).then((res) => {
                const Result = res.data
                if (Result === "Username Present") {
                    SetisUsernameVal(true)
                    SetisLoading(false)
                }
                else if (Result === "Email Present") {
                    SetisUsernameVal(false)
                    SetisEmailVal(true)
                    SetisLoading(false)
                }
                else {
                    SetisEmailVal(false)
                    SetisLoading(false)
                    Auth.SetUserData(Name.trim(), Email.trim(), UserName.trim(), Password.trim())
                    SetName('')
                    SetUserName('')
                    SetEmail('')
                    SetPassword('')
                    NaviGation.navigate('otp',{Route:"signup"})
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
                <Text style={styles.toptext}>Get Started</Text>
                <View style={styles.formcontainer}>
                    <View style={styles.inputbox}>
                        {
                            (isName) && <Text style={styles.inputvalidation}>Enter a valid name</Text>
                        }
                        <FontAwesome
                            name="address-card" size={18} color="black"
                            style={styles.icon}
                        />
                        <TextInput
                            style={[styles.input, (isName) && { borderColor: 'red', borderWidth: 1 }]}
                            placeholder='Your Full Name'
                            placeholderTextColor={'#ccc'}
                            selectionColor={'#f37646'}
                            onChangeText={SetName}
                            value={Name}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.inputbox}>
                        {
                            (isUsername) ? <Text style={styles.inputvalidation}>Enter a valid username</Text> : (isUsernameVal) && <Text style={styles.inputvalidation}>Username Already Exists</Text>
                        }
                        <FontAwesome
                            name="address-book" size={20} color="black"
                            style={styles.icon}
                        />
                        <TextInput
                            style={[styles.input, (isUsername || isUsernameVal) && { borderColor: 'red', borderWidth: 1 }]}
                            placeholder='Username'
                            placeholderTextColor={'#ccc'}
                            selectionColor={'#f37646'}
                            onChangeText={SetUserName}
                            value={UserName}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.inputbox}>
                        {
                            (isEmail) ? <Text style={styles.inputvalidation}>Invalid email address</Text> : (isEmailVal) && <Text style={styles.inputvalidation}>Email Already Exists</Text>
                        }
                        <MaterialIcons
                            name="email" size={20} color="black"
                            style={styles.icon}
                        />
                        <TextInput
                            style={[styles.input, (isEmail||isEmailVal) && { borderColor: 'red', borderWidth: 1 }]}
                            placeholder='Email'
                            placeholderTextColor={'#ccc'}
                            selectionColor={'#f37646'}
                            onChangeText={SetEmail}
                            value={Email}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.inputbox}>
                        {
                            (isPassword) && <Text style={styles.inputvalidation}>Enter a valid username</Text>
                        }
                        <FontAwesome5
                            name="key" size={18} color="black"
                            style={styles.icon}
                        />
                        <TextInput
                            style={[styles.input, (isPassword) && { borderColor: 'red', borderWidth: 1 }]}
                            placeholder='Password'
                            placeholderTextColor={'#ccc'}
                            selectionColor={'#f37646'}
                            secureTextEntry={HidePass}
                            onChangeText={SetPassword}
                            value={Password}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <FontAwesome
                            onPress={ShowPass}
                            name={LockName} size={24} color="black"
                            style={styles.icon2}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.button, styles.dspflex]}
                            onPress={() => { SignUpButton() }}
                        >
                            <Text style={styles.btntext}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={styles.alreadycontainer}>
                            <Text style={styles.accounttext}>Already have an account?
                            </Text>
                            <TouchableOpacity
                                onPress={() => { SendToPage('signin') }}
                            >
                                <Text style={styles.loginheretext}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default SignUp