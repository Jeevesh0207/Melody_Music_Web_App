import {
    View,
    Text,
    TextInput,
    FlatList,
    useWindowDimensions,
    TouchableOpacity,
    Image,
    Keyboard
} from 'react-native'
import styles from './StyleSearch'
import Ionicon from "react-native-vector-icons/Ionicons"
import { useState, useEffect } from 'react'
import { useSongAuth } from '../../Hook/Song';
import axios from 'axios';
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const Search = () => {
    const SongAuth = useSongAuth()
    const [InputText, SetInputText] = useState('')
    const [SongData, SetSongData] = useState([])
    const { width } = useWindowDimensions();
    const [numColumns, setNumColumns] = useState(calcNumColumns(width));
    

    const SetSong = async (CurrentSong) => {
        if (!CurrentSong.empty) {
            SongAuth.SetCurrentSong(CurrentSong)
            SongAuth.SetSongPlayHook(true)
            await AsyncStorage.setItem("CurrentSong",JSON.stringify(CurrentSong))
            await AsyncStorage.setItem("PlayList",JSON.stringify([]))
            await SongAuth.SetCurrentPlaylist([])
            await SongAuth.SetCurrentPlaylistName("Search")
        }

    }

    useEffect(() => {
        async function Search() {
            await axios.get(BASE_URL + '/search/' + InputText).then((res) => {
                SetSongData(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
        if(InputText===""){
            SetSongData([])
        }
        else Search()
    }, [InputText])

    
    

    const renderItem = ({ item }) => {
        return (
            <View style={styles.songbox} key={item} >
                <TouchableOpacity
                    onPress={() => {(SongAuth.CurrentSongID!==item.Name)&& SetSong(item) }}
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

    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <View style={styles.searchsubBox}>
                    <View style={styles.iconBox}>
                        <Ionicon
                            name="search"
                            size={30}
                            color={'#000'}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        cursorColor={'#ccc'}
                        placeholder='What do you want to listen to?'
                        onChangeText={SetInputText}
                        placeholderTextColor={'#000'}
                    />
                </View>
            </View>
            <View style={styles.itemcontainer}>
                <FlatList
                    data={(SetSongData)&&formatData(SongData, numColumns)}
                    numColumns={numColumns}
                    renderItem={renderItem}
                    horizontal={false}
                    key={numColumns}
                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                />
            </View>
        </View>
    )
}

export default Search