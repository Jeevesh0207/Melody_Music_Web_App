import {
    View,
    Text,
    Pressable,
    Modal,
    TouchableOpacity,
    SafeAreaView,
    ActivityIndicator,
    StatusBar,
    Image,
    Keyboard

} from 'react-native'
import React from 'react';
import styles from './StyleSmallPlayer'
import { useSongAuth } from '../../Hook/Song'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import BigPlayer from './BigPlayer'
import { useState, useEffect, useRef } from 'react';
import TrackPlayer, { RepeatMode, Event, useProgress } from 'react-native-track-player';
import { setupPlayer } from '../../musicPlayerService';
import axios from 'axios';
import { BASE_URL } from "@env"
import { getColors } from 'react-native-image-colors'
import LinearGradient from 'react-native-linear-gradient';
import { Loading } from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SmallPlayer = () => {
    const SongAuth = useSongAuth()
    const { position, duration } = useProgress()
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    const [isFav, SetisFav] = useState(false)
    const [isPlay, SetisPlay] = useState(false)
    const [isShuffle, SetisShuffle] = useState(false)
    const [isRepeat, SetisRepeat] = useState(false)
    const [isBigOpen, SetisBigOpen] = useState(false)
    const [colors, setColors] = useState(null)
    const [Lines, SetLines] = useState('')
    const [SongURL, SetSongURL] = useState("")
    const [isLoading, SetisLoading] = useState(false)
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    const cancelToken = useRef(null);

    const OpenBigPlayer = () => {
        SetisBigOpen(true)
    }
    const AddinFav = async () => {
        let SongData = await AsyncStorage.getItem("CurrentSong")
        SongData = JSON.parse(SongData)
        const UserName = await AsyncStorage.getItem("LoginToken")
        if (UserName) {
            const Data = {
                UserName: UserName,
                Name: SongData.Name,
                Artist: SongData.Artist,
                YTID: (SongData.YTID) ? SongData.YTID : "",
                Url: SongData.Url,
                SongUrl: (SongData.SongUrl) ? SongData.SongUrl : "",
                uniqueId: (SongData.uniqueId) ? SongData.uniqueId : ""
            }
            await axios.post(BASE_URL + '/addtofavorite', Data).then((res) => {
                if (res.data === "Data Added") {
                    SetisFav(true)
                } else {
                    SetisFav(false)
                }
            }).catch((err) => {
                console.log("ERROR")
            })
        }
    }

    const SongFetchAndSet = async (SongData) => {
        cancelToken.current = axios.CancelToken.source();
        SongAuth.SetCurrentSong(SongData);
        SongAuth.SetSongPlayHook(false)
        await AsyncStorage.setItem("CurrentSong", JSON.stringify(SongData))
        SetisLoading(true);
       
        const UserName = await AsyncStorage.getItem("LoginToken")
        const Data = {
            UserName: UserName,
            YTID: (SongData.YTID) ? SongData.YTID : "",
            uniqueId: (SongData.uniqueId) ? SongData.uniqueId : "",
            Name: SongData.Name
        }
        await axios.post(BASE_URL + "/addtofavorite/find", Data).then((res) => {
            // console.log(res.data)
            if (res.data === "Present") {
                SetisFav(true)
            } else {
                SetisFav(false)
            }
        }).catch((err) => {
            console.log(err)
        })

        

        if (SongData.YTID === "") {
            SetSongURL(SongData.SongUrl)
            await AsyncStorage.setItem("CurrentSong", JSON.stringify(SongData))
            await TrackPlayer.add([
                {
                    id: '1',
                    url: SongData.SongUrl,
                    artwork: SongData.Url,
                    title: SongData.Name,
                    artist: SongData.Artist,
                    duration: duration
                },
            ]);
            SetSongURL(SongData.SongUrl);
            SetisPlay(true);
            SongAuth.SetCurrentSongID(SongData.Name)
            SongAuth.SetPreviousSongID(SongData.id);
            SetisLoading(false);
            SongAuth.Setisfinish(false);
            await TrackPlayer.play();

        }
        else {
            try {
                const Data = {
                    ID: SongData.YTID,
                };
                
                const response = await axios.post(BASE_URL + '/songfetch', Data, {
                    cancelToken: cancelToken.current.token,
                });
                const URL = response.data[1].url;
                const isURLValid = await isUrl(URL);
               
                if (isURLValid) {
                    await TrackPlayer.add([
                        {
                            id: '1',
                            url: URL,
                            artwork: SongData.Url,
                            title: SongData.Name,
                            artist: SongData.Artist,
                            duration: duration
                        },
                    ]);
                    SetSongURL(URL);
                    SetisPlay(true);
                    SongAuth.SetCurrentSongID(SongData.Name)
                    SongAuth.SetPreviousSongID(SongData.id);
                    SetisLoading(false);
                    SongAuth.Setisfinish(false);
                    await TrackPlayer.play();
                }
            } catch (error) {
                console.log(error)
                console.log("Next Next.....")
                SetisPlay(false)
                SetisLoading(true);
            }
        }
        const PlayList = JSON.parse(await AsyncStorage.getItem("PlayList"))
        TrackPlayer.add(PlayList)
    };


    async function isUrl(url) {
        try {
            const response = await axios.head(url);
            return response.status === 200;
        } catch (error) {
            return false;
        }
    }


    const PlayandPause = async () => {
        if (!isPlay) {
            await TrackPlayer.play()
        } else {
            await TrackPlayer.pause()
        }
        SetisPlay(!isPlay)
    };

    const NextSong = async () => {
        SetisPlay(false)
        await TrackPlayer.reset()
        // console.log("Next")
        const SongData = JSON.parse(await AsyncStorage.getItem("PlayList"))
        const CurrentSong = JSON.parse(await AsyncStorage.getItem("CurrentSong"))
        const CurrentIndex = CurrentSong.id
        const Len = SongData.length
        // console.log(SongData)
        const newIndex = CurrentIndex + 1
        // console.log(CurrentIndex,newIndex)
        if (newIndex < Len) {
            const Data = SongData[newIndex]
            SongFetchAndSet(Data)
        } else {
            const Data = SongData[0]
            SongFetchAndSet(Data)
        }
    }
    const PrevSong = async () => {
        SetisPlay(false)
        await TrackPlayer.reset()
        console.log("Next")
        const SongData = JSON.parse(await AsyncStorage.getItem("PlayList"))
        const CurrentSong = JSON.parse(await AsyncStorage.getItem("CurrentSong"))
        const CurrentIndex = CurrentSong.id
        const Len = SongData.length
        const newIndex = CurrentIndex - 1
        if (newIndex >= 0) {
            const Data = SongData[newIndex]
            SongFetchAndSet(Data)
        } else {
            const Data = SongData[Len - 1]
            SongFetchAndSet(Data)
        }
    }
    const handleSliderChange = async (value) => {
        await TrackPlayer.seekTo(value);
    };

    async function RandomSong() {
        let previousIndex = (SongAuth.PreviousSongID) ? SongAuth.PreviousSongID : 0;
        const SongData = JSON.parse(await AsyncStorage.getItem("PlayList"))
        let newIndex = previousIndex;
        let Len = SongAuth.CurrentPlaylist.length
        while (newIndex === previousIndex) {
            newIndex = Math.floor(Math.random() * Len);
        }
        // console.log(newIndex)
        return SongData[newIndex];
    }


    useEffect(() => {
        async function setup() {
            let isSetup = await setupPlayer();
            setIsPlayerReady(isSetup);
        }

        setup();
    }, []);

    useEffect(() => {
        const Run = async () => {
            console.log("Off Run")
            const SongData = JSON.parse(await AsyncStorage.getItem("PlayList"))
            if (isShuffle) {
                await TrackPlayer.reset()
                // await TrackPlayer.pause()
                SetisPlay(false)
                const SongData = await RandomSong()
                SongFetchAndSet(SongData)
                SongAuth.Setisfinish(false)
            } else if (isRepeat) {
                await TrackPlayer.seekTo(0)
                SongAuth.Setisfinish(false)
            } else if (isPlayerReady) {
                await TrackPlayer.pause()
                SetisPlay(false)
                // console.log(SongData.length)
                if (SongData.length) {
                    NextSong()
                }

            }
        }
        if (SongAuth.isfinish)
            Run()
    }, [SongAuth.isfinish])

    useEffect(() => {
        const url = (SongAuth.CurrentSong.Url) ? SongAuth.CurrentSong.Url : `https://i.ytimg.com/vi/${SongAuth.CurrentSong.YTID}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBJYx7RKRnPEAogg1mN5GC-5UupA`
        async function findcolor() {
            await getColors(url, {
                fallback: '#cccccc',
                cache: true,
                key: url,
            }).then(setColors)
        }
        if (SongAuth.CurrentSong)
            findcolor()
    }, [SongAuth.CurrentSong])

    useEffect(() => {
        async function SetList(SongData) {
            SetisPlay(false)
            SetisLoading(true)
            await TrackPlayer.pause()
            await TrackPlayer.reset()
            SongFetchAndSet(SongData)
        }
        async function Run() {
            if (cancelToken.current) {
                cancelToken.current.cancel('Operations cancelled due to new request');
            }
            SongAuth.SetShowMiniPlayer(true)
            let SongData = await AsyncStorage.getItem("CurrentSong")
            SongData = JSON.parse(SongData)
            SongAuth.SetCurrentSong(SongData);
            SetList(SongData)
        }
        if (SongAuth.SongPlayHook)
            Run()
    }, [SongAuth.SongPlayHook])



    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setIsKeyboardOpen(true);
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setIsKeyboardOpen(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    useEffect(() => {
        TrackPlayer.addEventListener(Event.RemoteNext, NextSong)
        TrackPlayer.addEventListener(Event.RemotePrevious, PrevSong)
        TrackPlayer.addEventListener(Event.RemoteSeek, (event) => {
            handleSliderChange(event.position)
        })
        TrackPlayer.addEventListener(Event.RemotePause, () => {
            SetisPlay(false)
            TrackPlayer.pause()
        })
        TrackPlayer.addEventListener(Event.RemotePlay, () => {
            SetisPlay(true)
            TrackPlayer.play()
        })
        TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, (event) => {
            const Left = event.duration - event.position
            if (Left <= 4 && event.position !== 0 && event.duration !== 0) {
                // console.log("Song Ended")
                SongAuth.Setisfinish(true)
            }
        })
    }, [])



    return (
        <View style={[styles.container, styles.makecenter]}>
            {
                (SongAuth.ShowMiniPlayer && !isKeyboardOpen && colors) ?
                    <View style={[styles.minicontainer, styles.makecenter]}>
                        <Pressable style={styles.subcontainer}
                            onPress={() => { OpenBigPlayer() }}
                        >
                            {
                                (colors) &&
                                <LinearGradient
                                    // colors={[colors.average, colors.darkMuted]}
                                    colors={(colors) ? [colors.vibrant, '#000'] : '#ccc'}
                                    style={styles.lineargradient}
                                />
                            }
                            <View style={styles.subcontainerLeft}>
                                <View style={styles.subcontainerLeftL}>
                                    {
                                        (SongAuth.CurrentSong) &&
                                        <Image
                                            source={{
                                                uri: SongAuth.CurrentSong.Url
                                            }}
                                            style={styles.ytimage}
                                            resizeMode='cover'
                                        />
                                    }
                                </View>
                                <View style={styles.subcontainerLeftR}>
                                    <Text style={[styles.subcontainerLefttext, styles.songname]} numberOfLines={1} ellipsizeMode='tail'>{SongAuth.CurrentSong.Name}</Text>
                                    <Text style={[styles.subcontainerLefttext, styles.singername]} numberOfLines={1} ellipsizeMode='tail'>{SongAuth.CurrentSong.Artist}</Text>
                                </View>
                            </View>
                            <View style={styles.subcontainerRight}>
                                <TouchableOpacity
                                    onPress={() => { AddinFav() }}
                                >
                                    <FontAwesome name={(isFav) ? "heart" : "heart-o"} size={24} color={(isFav) ? "#f37646" : "#fff"} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { PlayandPause() }}
                                >
                                    {
                                        (isLoading) ?
                                            <View style={styles.miniloading}>
                                                <Loading size={65} bgColor={'transparent'} />
                                            </View> :
                                            <Foundation name={(!isPlay) ? "play" : "pause"} size={32} color="#fff" />
                                    }
                                </TouchableOpacity>
                            </View>
                        </Pressable>


                        <Modal
                            transparent={true}
                            visible={isBigOpen}
                            animationType='slide'
                            onRequestClose={() => { SetisBigOpen(false) }}
                        >
                            <BigPlayer
                                isFav={isFav}
                                AddinFav={AddinFav}
                                isPlay={isPlay}
                                PlayandPause={PlayandPause}
                                CurrentTime={position}
                                DurationTime={duration}
                                NextSong={NextSong}
                                PrevSong={PrevSong}
                                handleSliderChange={handleSliderChange}
                                isShuffle={isShuffle}
                                isRepeat={isRepeat}
                                SetisShuffle={SetisShuffle}
                                SetisRepeat={SetisRepeat}
                                colors={colors}
                                Lines={Lines}
                                SetLines={SetLines}
                                SongURL={SongURL}
                                isLoading={isLoading}
                                SetisBigOpen={SetisBigOpen}
                            />
                        </Modal>
                    </View>
                    :
                    (SongAuth.ShowMiniPlayer && !isKeyboardOpen) &&
                    <ActivityIndicator
                        size={40}
                        color={'#f37646'}
                    />
            }
        </View>
    )
}

export default SmallPlayer