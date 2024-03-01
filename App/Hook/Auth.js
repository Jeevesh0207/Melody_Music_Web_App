import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [Name, SetName] = useState('')
    const [Email, SetEmail] = useState('')
    const [UserName, SetUserName] = useState('')
    const [Password, SetPassword] = useState('')
    const [isLogin, SetisLogin] = useState(false)
    const SetUserData = (Name, Email, UserName, Password) => {
        SetName(Name)
        SetEmail(Email)
        SetUserName(UserName)
        SetPassword(Password)
    }
    const SetOnlyEmail = (Email) => {
        SetEmail(Email)
    }
    useEffect(() => {
        const CheckisLogin = async () => {
            try {
                const Token = await AsyncStorage.getItem('LoginToken')
                if (Token) {
                    SetisLogin(true)
                    SetUserName(Token)
                } else {
                    SetisLogin(false)
                }
            } catch (err) {
                console.log(err)
            }
        }
        CheckisLogin()
    },[])
    return (
        <AuthContext.Provider value={{ Name, Email, UserName, Password, isLogin, SetUserData, SetOnlyEmail, SetisLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}