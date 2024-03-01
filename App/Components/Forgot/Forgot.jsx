import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Pressable,
    ImageBackground
} from 'react-native'

import styles from './StyleForgot'
import { useNavigation } from '@react-navigation/native'
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'react-native-linear-gradient'
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from "@env"
import Loading from '../Loading/Loading';
import { useAuth } from '../../Hook/Auth';

const Forgot = () => {
    const Auth=useAuth()
    const NaviGation = useNavigation()

    const [Email,SetEmail]=useState('')

    const [isEmail, SetisEmail] = useState(false)
    const [isEmailVal, SetisEmailVal] = useState(false)
    const [isLoading,SetisLoading]=useState(false)

    const SendToPage = (route) => {
        NaviGation.navigate(route)
    }
    const SendandCheck=async()=>{
        const checkemail=Email.trim().length
        if(!checkemail){
            SetisEmail(true)
        }else{
            SetisEmail(false)
            SetisLoading(true)
            const Data={
                Email:Email.trim()
            }
            await axios.post(BASE_URL+'/forgotcheckemail',Data).then((res)=>{
                const Result=res.data
                if(Result==="Invalid"){
                    SetisEmailVal(true)
                    SetisLoading(false)
                }else{
                    SetisEmailVal(false)
                    SetisLoading(false)
                    SetEmail('')
                    Auth.SetOnlyEmail(Email)
                    NaviGation.navigate('otp',{Route:"Forgot"})
                }
            }).catch((err)=>{
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
                (isLoading)&&<Loading/>
            }
            <View style={styles.container}>
                <Text style={styles.toptext}>Recovery Password</Text>
                <Text style={styles.topinfo}>Enter the email address associated with your account</Text>
                <View style={styles.formcontainer}>
                    <View style={styles.inputbox}>
                        {
                            (isEmail)?<Text style={styles.inputvalidation}>
                            Enter a valid email</Text>:(isEmailVal)&&<Text style={styles.inputvalidation}>
                            No account associate with this email address</Text>
                        }
                        <MaterialIcons
                            name="email" size={20} color="black"
                            style={styles.icon}
                        />
                        <TextInput
                            style={[styles.input,(isEmail||isEmailVal) && { borderColor: 'red', borderWidth: 1 }]}
                            placeholder='Email'
                            selectionColor={'#f37646'}
                            onChangeText={SetEmail}
                            value={Email}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.button, styles.dspflex]}
                        onPress={()=>{SendandCheck()}}
                        >
                            <Text style={styles.btntext}>Send</Text>
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

export default Forgot