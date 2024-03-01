import {
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './StyleUser'
import { useAuth } from '../../Hook/Auth'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { BASE_URL } from '@env'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import axios from 'axios'
import { Loading } from '..'

const User = () => {
    const Auth = useAuth()
    const NaviGation = useNavigation()
    const [Name, SetName] = useState('')
    const [UserName, SetUserName] = useState('')
    const [isModelOpen, SetisModelOpen] = useState(false)
    const [isLoading, SetisLoading] = useState(false)
    const LogOut = async () => {
        await AsyncStorage.removeItem("CurrentSong")
        await AsyncStorage.removeItem('LoginToken')
        Auth.SetisLogin(false)
        NaviGation.navigate('main')
    }
    const DeleteAccount = async () => {
        const Data = {
            UserName: UserName
        }
        await axios.post(BASE_URL + '/deleteaccount', Data).then(async (res) => {
            if (res.data === "Account Deleted") {
                // await AsyncStorage.removeItem("Name")
                await AsyncStorage.removeItem("CurrentSong")
                await AsyncStorage.removeItem("LoginToken")
                Auth.SetisLogin(false)
                NaviGation.navigate('main')
            }
        }).catch((err) => {
            console.log("Error")
        })
    }

    const FindName=async(UserName)=>{
        const Data = {
            UserName: UserName
        }
        await axios.post(BASE_URL + "/getdata", Data).then((res) => {
            // console.log(res.data)
            SetName(res.data.Name)
            SetisLoading(false)
        }).catch((err)=>{
            console.log(err)
            SetisLoading(false)
        })
    }

    useEffect(() => {
        async function UserData() {
            SetisLoading(true)
            const UserName = await AsyncStorage.getItem("LoginToken")
            console.log("USER "+UserName)
            SetUserName(UserName)
            if (UserName) {
                FindName(UserName)
            }
            SetisLoading(false)
            
        }
        UserData()
    }, [])
    return (
        <View style={styles.container}>
            {
                (isLoading) ? <Loading />
                    :
                    <>
                        <View style={styles.topBanner}>

                            <Image
                                source={{
                                    uri: "https://raw.githubusercontent.com/Jeevesh27/MelodyPhotos/main/profile.png"
                                }}
                                style={styles.profilepic}
                            />
                            <Text style={styles.Name}>{Name}</Text>
                            <Text style={styles.UserName}>{UserName}</Text>
                        </View>
                        <View style={styles.middle}>
                            <TouchableOpacity
                                onPress={LogOut}
                                style={[styles.button, styles.makecenter]}
                            >
                                <Text style={styles.btntext}>Logout</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { SetisModelOpen(true) }}

                                style={[styles.button, styles.makecenter, { backgroundColor: '#e60000' }]}
                            >
                                <Text style={styles.btntext}>Delete Account</Text>
                            </TouchableOpacity>
                        </View>
                        <Modal
                            visible={isModelOpen}
                            animationType='slide'
                            onRequestClose={() => { SetisModelOpen(false) }}
                        >
                            <View style={styles.modal}>
                                <FontAwesome
                                    name='user-times'
                                    size={100}
                                    color={'orange'}
                                />
                                <View style={[styles.modalcontainer, styles.makecenter]}>
                                    <Text style={styles.modaltext}>Are you sure you want to delete your Melody Music account?</Text>
                                </View>
                                <TouchableOpacity
                                    style={[styles.button, styles.makecenter, { backgroundColor: '#e60000' }]}
                                    onPress={() => { DeleteAccount() }}
                                >
                                    <Text style={styles.btntext}>Yes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { SetisModelOpen(false) }}
                                    style={[styles.button, styles.makecenter]}
                                >
                                    <Text style={styles.btntext}>No</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    </>
            }
        </View>
    )
}

export default User