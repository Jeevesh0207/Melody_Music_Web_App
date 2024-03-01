import {
    View,
    Text,
    Button,
    StatusBar,
    ScrollView,
} from 'react-native'
import styles from './StyleHome'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../Hook/Auth';
import Slider from './Slider';
import Lists from './Lists';
import axios from 'axios';
import { BASE_URL } from '@env'
import { Loading } from '..';
import TopArtist from '../TopArtist/TopArtist';
import { useSongAuth } from '../../Hook/Song';

const Home = () => {
    const SongAuth=useSongAuth()
    const NaviGation = useNavigation()
    const [SliderImage, SetSliderImage] = useState([])
    const [TopArtistData, SetTopArtistData] = useState([])
    const [SliderImageLoding, SetSliderImageLoading] = useState(false)
    const [TopArtistDataLoading, SetTopArtistDataLoading] = useState(false)
    
    const [NewReleaseHindi, SetNewReleaseHindi] = useState([])
    const [NewReleaseEnglish, SetNewReleaseEnglish] = useState([])
    const [HindiTrendingSong,SetHindiTrendingSong]=useState([])
    const [EnglishTrendingSong, SetEnglishTrendingSong] = useState([])
    const [RomanticHindiSong,SetRomanticHindiSong]=useState([])
    const [RomanticEnglishSong,SetRomanticEnglishSong]=useState([])
    const [SadPopSong,SetSadPopSong]=useState([])
    const [SadSongHindi,SetSadSongHindi]=useState([])
    const [DanceHindiSong,SetDanceHindiSong]=useState([])
    const [SongHindi90s,SetSongHindi90s]=useState([])
    const [WorkoutHindiSong,SetWorkoutHindiSong]=useState([])
    const [BhaktiHindiSong,SetBhaktiHindiSong]=useState([])

    const [NewReleaseHindiLoding, SetNewReleaseHindiLoading] = useState(false)
    const [NewReleaseEnglishLoding, SetNewReleaseEnglishLoading] = useState(false)
    const [HindiTrendingSongLoading,SetHindiTrendingSongLoading]=useState(false)
    const [EnglishTrendingSongLoading, SetEnglishTrendingSongLoading] = useState(false)
    const [RomanticHindiSongLoading,SetRomanticHindiSongLoading]=useState(false)
    const [RomanticEnglishLoading,SetRomanticEnglishLoading]=useState(false)
    const [SadPopSongLoading,SetSadPopSongLoading]=useState(false)
    const [SadSongHindiLoading,SetSadSongHindiLoading]=useState(false)
    const [DanceHindiSongLoading,SetDanceHindiSongLoading]=useState(false)
    const [SongHindi90sLoading,SetSongHindi90sLoading]=useState(false)
    const [WorkoutHindiSongLoading,SetWorkoutHindiSongLoading]=useState(false)
    const [BhaktiHindiSongLoading,SetBhaktiHindiSongLoading]=useState(false)
    

    const CheckisLogin = async () => {
        const Token = await AsyncStorage.getItem('LoginToken')
        if (!Token) {
            NaviGation.navigate('main')
        }
    }

    useEffect(() => {
        CheckisLogin()
    }, [])

    useEffect(() => {
        async function getData(path, Set, Loading) {
            Loading(true)
            const Data = await axios.get(BASE_URL + path)
            if (Data)
                Set(Data.data)
            Loading(false)
        }
        getData('/sliderimage', SetSliderImage, SetSliderImageLoading)
        getData('/topartists', SetTopArtistData, SetTopArtistDataLoading)
        getData('/newreleasehindi', SetNewReleaseHindi, SetNewReleaseHindiLoading)
        getData('/newreleaseenglish', SetNewReleaseEnglish, SetNewReleaseEnglishLoading)
        getData('/hinditrendingsong', SetHindiTrendingSong, SetHindiTrendingSongLoading)
        getData('/englishtrendingsong', SetEnglishTrendingSong, SetEnglishTrendingSongLoading)
        getData('/hindiromantic', SetRomanticHindiSong, SetRomanticHindiSongLoading)
        getData('/englishromantic', SetRomanticEnglishSong, SetRomanticEnglishLoading)
        getData('/sadpopsong', SetSadPopSong, SetSadPopSongLoading)
        getData('/sadsonghindi', SetSadSongHindi, SetSadSongHindiLoading)
        getData('/dancehindisong', SetDanceHindiSong, SetDanceHindiSongLoading)
        getData('/songhindi90s', SetSongHindi90s, SetSongHindi90sLoading)
        getData('/workoutsong', SetWorkoutHindiSong, SetWorkoutHindiSongLoading)
        getData('/bhaktihindisong', SetBhaktiHindiSong, SetBhaktiHindiSongLoading)

    }, [])

    return (
        <View style={{ position: 'relative', flex: 1 }} >
            {
                (
                    NewReleaseHindiLoding && 
                    SliderImageLoding &&
                    TopArtistDataLoading &&
                    NewReleaseEnglishLoding &&
                    HindiTrendingSongLoading &&
                    EnglishTrendingSongLoading &&
                    RomanticHindiSongLoading &&
                    RomanticEnglishLoading &&
                    SadPopSongLoading &&
                    SadSongHindiLoading &&
                    DanceHindiSongLoading &&
                    SongHindi90sLoading &&
                    WorkoutHindiSongLoading &&
                    BhaktiHindiSongLoading
                    ) 
                    ? <Loading /> :
                    <View style={styles.container}>
                        {/* <> */}
                        <StatusBar backgroundColor={'#000'} />
                        <Slider SliderImage={SliderImage} />
                        <ScrollView showsVerticalScrollIndicator={false}
                        >
                            <TopArtist Data={TopArtistData} />
                            <Lists songData={NewReleaseHindi} />
                            <Lists songData={NewReleaseEnglish} />
                            <Lists songData={HindiTrendingSong} />
                            <Lists songData={EnglishTrendingSong} />
                            <Lists songData={RomanticHindiSong} />
                            <Lists songData={RomanticEnglishSong} />
                            <Lists songData={SadPopSong} />
                            <Lists songData={SadSongHindi} />
                            <Lists songData={DanceHindiSong} />
                            <Lists songData={SongHindi90s} />
                            <Lists songData={WorkoutHindiSong} />
                            <Lists songData={BhaktiHindiSong} />

                            <View style={{width:'100%',height:(SongAuth.CurrentSong)?300:220,backgroundColor:'#000'}}></View>
                            
                        </ScrollView>
                        {/* </> */}
                    </View>
            }
        </View>

    )
}

export default Home