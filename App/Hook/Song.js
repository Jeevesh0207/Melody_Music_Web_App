import { createContext, useContext, useState } from "react";
const AuthSongContext = createContext(null)
export const AuthSongProvider = ({ children }) => {
    const [isBigVisible, SetisBigVisible] = useState(false)
    const [CurrentSongID, SetCurrentSongID] = useState('')
    const [PreviousSongID, SetPreviousSongID] = useState('')
    const [isfinish, Setisfinish] = useState(false)
    const [ShowMiniPlayer,SetShowMiniPlayer]=useState(false)
    const [CurrentSong, SetCurrentSong] = useState('')
    const [CurrentPlaylist, SetCurrentPlaylist] = useState([])
    const [CurrentPlaylistName, SetCurrentPlaylistName] = useState('')
    

    const [SongPlayHook,SetSongPlayHook]=useState(false)

    return (
        <AuthSongContext.Provider value={{ isBigVisible, CurrentSong, CurrentPlaylist, PreviousSongID, isfinish, CurrentPlaylistName,SongPlayHook,ShowMiniPlayer,CurrentSongID,SetCurrentSongID,SetShowMiniPlayer,Setisfinish, SetPreviousSongID, SetCurrentSong, SetCurrentPlaylist, SetisBigVisible, SetCurrentPlaylistName,SetSongPlayHook }}>
            {children}
        </AuthSongContext.Provider>
    )
}

export const useSongAuth = () => {
    return useContext(AuthSongContext)
}