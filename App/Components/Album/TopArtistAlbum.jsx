import {
    Text,
    View,
    Button,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    FlatList,
    useWindowDimensions,
    ScrollView,
    Keyboard
} from 'react-native'

import styles from './StyleTopArtistAlbum'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useEffect, useState } from 'react'
import { useSongAuth } from '../../Hook/Song'
import { BASE_URL } from '@env'
import { Loading } from '..'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const minCols = 2;
const calcNumColumns = (width) => {
    const cols = width / styles.songbox.width;
    const colsFloor = Math.floor(cols) > minCols ? Math.floor(cols) : minCols;
    const colsMinusMargin = cols - 2 * colsFloor * styles.songbox.margin;
    if (colsMinusMargin < colsFloor && colsFloor > minCols) return colsFloor - 1;
    else return colsFloor;
};

const formatData = (data, numColumns) => {
    const amountFullRows = Math.floor(data.length / numColumns);
    let amountItemsLastRow = data.length - amountFullRows * numColumns;

    while (amountItemsLastRow !== numColumns && amountItemsLastRow !== 0) {
        data.push({ key: `empty-${amountItemsLastRow}`, empty: true });
        amountItemsLastRow++;
    }
    return data;
};

const Album = ({ route }) => {
    const NaviGation = useNavigation()
    const SongAuth = useSongAuth()

    const [InputVal, SetInputVal] = useState('')
    const { width } = useWindowDimensions();
    const [SearchData, SetSearchData] = useState([])
    const [numColumns, setNumColumns] = useState(calcNumColumns(width));
    const [isKeyboard, SetisKeyboard] = useState(false)
    const SongData = route.params.Data.songs
    const SingerName = route.params.Data.Name
    const SetSong = async (CurrentSong) => {
        if (!CurrentSong.empty) {
            // console.log(CurrentSong)
            await AsyncStorage.setItem("CurrentSong",JSON.stringify(CurrentSong))
            await AsyncStorage.setItem("PlayList",JSON.stringify(SongData))
            SongAuth.SetSongPlayHook(true)
            SongAuth.SetCurrentSong(CurrentSong)
            await SongAuth.SetCurrentPlaylist(SongData)
            await SongAuth.SetCurrentPlaylistName(SingerName)
        }
    }

    const SendToPage = () => {
        NaviGation.goBack()
    }



    const renderItem = ({ item }) => {
        return (
            <View style={styles.songbox} key={item} >
                <TouchableOpacity
                    onPress={() => {
                        (SongAuth.CurrentSongID!==item.Name)&& SetSong(item) }}
                >
                    <View style={styles.boxbanner}>
                        {
                            (item.Url) &&
                            <Image
                                source={{
                                    uri: item.Url
                                }}
                                style={styles.imgBanner}
                            />
                        }
                    </View>
                    <View style={styles.titlebox}>
                        <Text style={styles.titlename} numberOfLines={1} ellipsizeMode='tail'>{item.Name}</Text>
                        <Text style={styles.titlesinger} numberOfLines={1} ellipsizeMode='tail' >{item.Artist}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }



    useEffect(() => {
        setNumColumns(calcNumColumns(width));
    }, [width]);

    useEffect(() => {
        const Show = Keyboard.addListener('keyboardDidShow', () => {
            SetisKeyboard(true)
        })
        const Hide = Keyboard.addListener('keyboardDidHide', () => {
            SetisKeyboard(false)
        })
        return () => {
            Show.remove();
            Hide.remove();
        };
    }, [Keyboard])

    useEffect(() => {
        async function Search() {
            const Data = []
            SongData.map((item) => {
                if (item.Name) {
                    const ispresent = item.Name.replaceAll(' ', '').toLowerCase().includes(InputVal.replaceAll(' ', '').toLowerCase())
                    if (ispresent) {
                        Data.push(item)
                    }
                }

            })
            SetSearchData(Data)
        }
        if (SongData)
            Search()
    }, [InputVal])

    
    return (
        <View style={styles.container}>
            <View style={styles.topmenu}>
                <View style={[styles.topmenuleft, styles.makecenter]}>
                    <TouchableOpacity
                        onPress={() => { SendToPage() }}
                    >
                        <Ionicons
                            name="arrow-back"
                            size={25}
                            color={'#fff'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={[styles.topmenumid, styles.makecenter]}>
                    <TextInput
                        value={InputVal}
                        onChangeText={SetInputVal}
                        style={styles.topinputbox}
                        placeholder='Enter Song Name...'
                        placeholderTextColor={'#ccc'}
                        cursorColor={'#ccc'}
                    />
                </View>
                <View style={[styles.topmenuright, styles.makecenter]}>
                    <Ionicons
                        name="search"
                        size={25}
                        color={'#fff'}
                    />
                </View>
            </View>
            {
                (!isKeyboard) && <View style={[styles.bannerConatiner, styles.makecenter]}>
                    <View style={styles.imgbanner}>
                        <Text style={styles.topheadtext}>{SingerName}</Text>
                    </View>
                </View>
            }

            <View style={styles.itemsconatiner}>
                {
                    <FlatList
                        data={(InputVal.trim().length) ? formatData(SearchData, numColumns) : formatData(SongData, numColumns)}
                        numColumns={numColumns}
                        initialNumToRender={10}
                        maxToRenderPerBatch={10}
                        renderItem={renderItem}
                        horizontal={false}
                        key={numColumns}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={(SongAuth.CurrentSong) ? {
                            paddingBottom: 100
                        } : {
                            paddingBottom: 60
                        }}
                    />
                }
            </View>

        </View>
    )
}

export default Album