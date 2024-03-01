import {
    View,
    Text,
    Pressable,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    ScrollView,
    Image,
    PermissionsAndroid,
    Platform,
    Alert,
    BackHandler
} from 'react-native'
import styles from './StyleBigPlayer'
import Feather from 'react-native-vector-icons/Feather';
import { Slider } from '@react-native-assets/slider'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from "react-native-vector-icons/Octicons"
import { useSongAuth } from '../../Hook/Song'
import { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { Loading } from '..';
import { downloadFile,getDownloadPermissionAndroid } from '../../DownloadOption';

const BigPlayer = ({ isFav, AddinFav, isPlay, PlayandPause, CurrentTime, DurationTime, NextSong, PrevSong, handleSliderChange, SetisShuffle, SetisRepeat, isShuffle, isRepeat, colors, Lines, SetLines, SongURL, isLoading, SetisBigOpen }) => {

    const SongAuth = useSongAuth()
    const [Lyrics, SetLyrics] = useState('')
    const CloseBigPlayer = () => {
        SetisBigOpen(false)
    }
    const ShuffleButton = () => {
        SetisShuffle(!isShuffle)
        SetisRepeat(false)
    }
    const RepeatButton = () => {
        SetisRepeat(!isRepeat)
        SetisShuffle(false)
    }
    function format(seconds) {
        let mins = (parseInt(seconds / 60)).toString().padStart(2, '0');
        let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }

   

    const DownloadFile = async () => {
        if(getDownloadPermissionAndroid()){
            downloadFile(SongURL,SongAuth.CurrentSong.Name)
        }
    };

   
    




    useEffect(() => {
        async function AddLyrics() {
            await axios.get("https://genius-data.vercel.app/getlyrics?name=" + SongAuth.CurrentSong.Name).then((res) => {
                const Data = res.data
                SetLyrics(Data.lyrics)
            }).catch((err) => {
                console.log("AddLyrics: " + "Lyrics Not Exists..")
                SetLyrics('')
                SetLines('')
            })
        }
        AddLyrics()
    }, [SongAuth.CurrentSong])

    useEffect(() => {
        const words = Lyrics.split(/\s+/);
        const lines = [];
        for (let i = 0; i < words.length; i += 5) {
            lines.push(words.slice(i, i + 5).join(' '));
        }
        if (Lyrics)
            SetLines(lines)
    }, [SongAuth.CurrentSong, Lyrics])



    return (
        <ScrollView
            style={styles.maincontainer}
            showsVerticalScrollIndicator={false}
        >
            
            {
                (colors) &&
                <LinearGradient
                    // colors={[colors.average, colors.darkMuted, colors.dominant]}
                    colors={[colors.vibrant, colors.average, colors.dominant, '#000']}
                    style={styles.lineargradient}
                />
            }
            <StatusBar backgroundColor={(colors) && colors.vibrant} barStyle="none" translucent={true} />
            <View style={styles.topBar}>
                <TouchableOpacity style={[styles.topBarLeft, styles.makecenter]}
                    onPress={() => { CloseBigPlayer() }}
                >
                    <Feather name="chevron-down" size={30} color="#fff" />
                </TouchableOpacity>
                <View style={styles.topBarmid}>
                    <Text style={styles.topBarmidtoptext}>PLAYING FROM</Text>
                    <Text style={styles.topBarmidbottomtext}>{SongAuth.CurrentPlaylistName}</Text>
                </View>
                <TouchableOpacity
                    onPress={()=>{DownloadFile()}}
                >
                    <View style={[styles.topBarright, styles.makecenter]}>
                        <Octicons name="download" size={24} color="#fff" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[styles.BannerContainer, styles.makecenter]}>
                <View style={styles.imagebanner}>
                    {
                        (SongAuth.CurrentSong) &&
                        <Image
                            style={styles.ytimage}
                            source={{
                                uri: (SongAuth.CurrentSong.Url) ? SongAuth.CurrentSong.Url : `
                                https://i.ytimg.com/vi/${SongAuth.CurrentSong.YTID}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBJYx7RKRnPEAogg1mN5GC-5UupA`
                            }}
                        />
                    }
                </View>
            </View>
            <View style={styles.DetailContainer}>
                <View style={styles.DetailsubContainer}>
                    <View style={styles.DetailContainerLeft}>
                        <Text style={styles.DetailContainerLefttoptext}
                            numberOfLines={1}
                            ellipsizeMode='tail'
                        >{SongAuth.CurrentSong.Name}</Text>
                        <Text style={styles.DetailContainerLeftbottomtext}
                            numberOfLines={1}
                            ellipsizeMode='tail'
                        >{SongAuth.CurrentSong.Artist}</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.DetailContainerRight, styles.makecenter]}
                        onPress={() => { AddinFav() }}
                    >
                        <FontAwesome name={(isFav) ? "heart" : "heart-o"} size={30} color={(isFav) ? "#f37646" : "#fff"} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Track}>
                <View style={[styles.TrackContainer]}>
                    <Slider
                        value={CurrentTime}
                        minimumValue={0}
                        maximumValue={DurationTime}
                        step={0}
                        minimumTrackTintColor='#fff'
                        maximumTrackTintColor='rgba(255,255,255,0.4)'
                        thumbTintColor='#fff'
                        trackHeight={4}
                        thumbSize={12}
                        slideOnTap={true}
                        onValueChange={(value) => {
                            handleSliderChange(value)
                        }}
                        onSlidingComplete={(value) => {
                            handleSliderChange(value);
                        }}
                    />
                    <Text style={styles.TrackContainerL}>{format(CurrentTime)}</Text>
                    <Text style={styles.TrackContainerR}>{format(DurationTime)}</Text>
                </View>
            </View>
            <View style={styles.controls}>
                <View style={styles.controlscontainer}>
                    <View style={[styles.controlscontainerL, styles.makecenter]}>
                        <TouchableOpacity
                            onPress={() => { (SongAuth.CurrentPlaylist.length) && ShuffleButton() }}
                        >
                            <Ionicons name="shuffle" size={28} color={(isShuffle) ? '#f37646' : '#fff'} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.controlscontainerM, styles.makecenter, { flexDirection: 'row' }]}>
                        <TouchableOpacity
                            onPress={() => {
                                (SongAuth.CurrentPlaylist.length) && PrevSong()
                            }}
                        >
                            <AntDesign name="stepbackward" size={24} color="#fff" />
                        </TouchableOpacity>
                        {
                            (isLoading) ?
                                <TouchableOpacity
                                    style={[styles.controlscontainerMplay, styles.makecenter,]}
                                >
                                    <Loading />
                                </TouchableOpacity > :
                                <TouchableOpacity
                                    style={[styles.controlscontainerMplay, styles.makecenter, (!isPlay) ? { paddingLeft: 5 } : { paddingLeft: 0 }]}
                                    onPress={() => { PlayandPause() }}
                                >
                                    {
                                        (isLoading) ? <Loading /> :
                                            <Foundation name={(!isPlay) ? "play" : "pause"} size={38} color="#000" />
                                    }
                                </TouchableOpacity >
                        }
                        <TouchableOpacity
                            onPress={() => {
                                (SongAuth.CurrentPlaylist.length) && NextSong()
                            }}>
                            <AntDesign name="stepforward" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.controlscontainerR, styles.makecenter]}>
                        <TouchableOpacity
                            onPress={() => { RepeatButton() }}
                        >
                            <Feather name="repeat" size={22} color={(isRepeat) ? '#f37646' : '#fff'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[styles.lyricsContainer, styles.makecenter]}>
                <View style={styles.mainlyricsContainer}>
                    <LinearGradient
                        colors={['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)']}
                        style={styles.lineargradient}
                    />
                    <Text style={styles.lyricstitle}>Lyrics</Text>
                    <ScrollView
                        style={styles.alllinecontainer}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={(Lines) ? styles.suballlinecontainer : styles.makecentersuballlinecontainer}>
                            {
                                (Lines) ? Lines.map((line, index) => (
                                    <View key={index} style={styles.eachlinestyle}>
                                        <Text style={styles.eachlinetext} numberOfLines={1}>{line}</Text>
                                    </View>
                                )) :
                                    <Text style={styles.nodatatext}>No Data</Text>
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

export default BigPlayer