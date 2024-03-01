import {
    View,
    Text,
    useWindowDimensions,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native'
import styles from './StyleLibrary'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';
import { BASE_URL } from '@env'
import { Loading } from '..';
import { useFocusEffect } from '@react-navigation/native';
import { useSongAuth } from '../../Hook/Song';

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

const Library = () => {
    const SongAuth = useSongAuth()
    const [UserName, SetUserName] = useState('')
    const [SongData, SetSongData] = useState([])
    const [isLoding, SetisLoading] = useState(false)
    const { width } = useWindowDimensions();
    const [numColumns, setNumColumns] = useState(calcNumColumns(width));

    const renderItem = ({ item }) => {
        return (
            <View style={styles.songbox} key={item} >
                <TouchableOpacity
                    onPress={() => {
                        (SongAuth.CurrentSongID !== item.Name) && SetSong(item)
                    }}
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

    const SetSong = async (CurrentSong) => {
        if (!CurrentSong.empty) {
            SongAuth.SetCurrentSong(CurrentSong)
            SongAuth.SetSongPlayHook(true)
            await AsyncStorage.setItem("CurrentSong", JSON.stringify(CurrentSong))
            await AsyncStorage.setItem("PlayList", JSON.stringify(SongData))
            await SongAuth.SetCurrentPlaylist(SongData)
            await SongAuth.SetCurrentPlaylistName("Library")
        }

    }
    useEffect(() => {
        setNumColumns(calcNumColumns(width));
    }, [width]);

    function insertIdsToArray(SongData) {
        for (let i = 0; i < SongData.length; i++) {
            SongData[i].id = i;
        }
        SetSongData(SongData)
    }

    useEffect(() => {
        async function FindSongData() {
            SetisLoading(true)
            const UserName = await AsyncStorage.getItem("LoginToken")
            // console.log(UserName)
            const Data = {
                UserName: UserName
            }
            await axios.post(BASE_URL + '/addtofavorite/data', Data).then((res) => {
                insertIdsToArray(res.data)
                // console.log(SongData)
                SetisLoading(false)
            }).catch((err) => {
                console.log(err)
                SetisLoading(false)
            })
        }
        async function FindUserName() {
            const Name = await AsyncStorage.getItem("LoginToken")
            SetUserName(Name[0])
            FindSongData()
        }
        FindUserName()
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.topheadBox}>
                <View style={[styles.topprofileBox, styles.makecenter]}>
                    <Text style={styles.firstName}>{UserName}</Text>
                </View>
                <Text style={styles.topheadtext}>Your Library</Text>
            </View>
            <View style={styles.itemcontainer}>
                {
                    (isLoding) ? <Loading /> :
                        <FlatList
                            data={(SongData) && formatData(SongData, numColumns)}
                            numColumns={numColumns}
                            renderItem={renderItem}
                            horizontal={false}
                            key={numColumns}
                            initialNumToRender={10}
                            maxToRenderPerBatch={10}
                        />
                }
            </View>
        </View>
    )
}

export default Library