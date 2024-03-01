
import { createContext, useContext, useState } from "react";

const AuthSongContext=createContext(null)

export const AuthSongProvider=({children})=>{
    const [SongID, setSondID] = useState('')
    const [SongName, setSongName] = useState('')
    const [SingerName, setSingerName] = useState('')
    const [BoolPlay,setBoolPlay]=useState(false)
    const [SongURL,setSongURL]=useState(null)
    const [isSearch,setisSearch]=useState(false)
    const [SearchPicURL,setSearchPicURL]=useState('')
    const [totalIntVal, settotalIntval] = useState(100)
    const [originalDuration, setoriginalDuration] = useState('00:00')
    const setBoolSong=(BoolPlay)=>{
        setBoolPlay(BoolPlay)
    }
    const SetSongData=(SongID,SongName,SingerName)=>{
        setSondID(SongID)
        setSongName(SongName)
        setSingerName(SingerName)
    }
    return(
        <AuthSongContext.Provider value={{originalDuration,totalIntVal,SearchPicURL,isSearch,SongID,SongName,SingerName,SongURL,BoolPlay,setBoolSong,setSongURL,SetSongData,setisSearch,setSearchPicURL,settotalIntval,setoriginalDuration}}>
            {children}
        </AuthSongContext.Provider>
    )
}

export const useSongAuth=()=>{
    return useContext(AuthSongContext)
}