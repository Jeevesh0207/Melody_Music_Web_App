import { createContext, useContext, useState } from "react";

const AuthContext=createContext(null)

export const AuthProvider=({children})=>{
    const [FName, setFName] = useState('')
    const [LName, setLName] = useState('')
    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')
    const [imagepath,setimagepath]=useState('')
    const [isPlayer,setisPlayer]=useState(false)
    const [UserName, setUserName] = useState('')
    const SetUserName=(UserName)=>{
        setUserName(UserName)
    }
    const setAllData=(FName,LName,Email,Pass,UserName,imagepath)=>{
        setFName(FName)
        setLName(LName)
        setEmail(Email)
        setPass(Pass)
        setUserName(UserName)
        setimagepath(imagepath)
    }
    return(

        <AuthContext.Provider value={{imagepath,isPlayer,FName,LName,Email,Pass,UserName,setAllData,SetUserName,setisPlayer}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(AuthContext)
}