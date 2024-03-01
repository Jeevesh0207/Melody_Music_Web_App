import {
    View,
    Text,
    FlatList,
    Dimensions,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    Pressable
} from 'react-native'

import styles from './StyleLists'
import Entypo from 'react-native-vector-icons/Entypo'
import { useEffect, useState } from 'react'
import { useSongAuth } from '../../Hook/Song'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Lists = ({ songData,path}) => {
    const SongAuth = useSongAuth()
    const NaviGation = useNavigation()
    const SetSong = async (SongData) => {
        SongAuth.SetSongPlayHook(true)
        SongAuth.SetCurrentSong(SongData)
        await AsyncStorage.setItem("CurrentSong",JSON.stringify(SongData))
        await AsyncStorage.setItem("PlayList",JSON.stringify(songData.songs))
        await SongAuth.SetCurrentPlaylist(songData.songs)
        await SongAuth.SetCurrentPlaylistName(songData.playListName)
    }
    const returnItem = ({ item}) => (
        <TouchableOpacity
            onPress={() => { (SongAuth.CurrentSongID!==item.Name) && SetSong(item) }}
            // activeOpacity={0.7}
        >
            <View style={styles.Box} key={item} >
                <View style={styles.boxbanner}>
                    {
                        <Image
                            source={{
                                uri: (item.Url) ? item.Url :
                                    `https://i.ytimg.com/vi/${item.YTID}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBJYx7RKRnPEAogg1mN5GC-5UupA`
                            }}
                            style={styles.imgBanner}
                        />
                    }
                </View>
                <View style={styles.titlebox}>
                    <Text style={styles.titlename} numberOfLines={1} ellipsizeMode='tail'>{item.Name}</Text>
                    <Text style={styles.titlesinger} numberOfLines={1} ellipsizeMode='tail' >{item.Artist}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
    const SendToPage = (route) => {
        NaviGation.navigate(route, {
            songData: songData,
            path:path,
            isfromSlider:false
        })
    }
    return (
        <View style={styles.cotainer}>
            <View style={styles.toptitle}>
                <Text style={styles.toptitletext}>{songData.playListName}</Text>
                <TouchableOpacity
                    onPress={() => SendToPage('album')}
                >
                    <View style={[styles.toptitleright, styles.makecenter]}>
                        <Text style={styles.toptitlerighttext}>View all</Text>
                        <Entypo
                            name="chevron-small-right"
                            size={25}

                            style={[styles.toptitlerighticon]}

                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.listcontainer}>
                
                <FlatList
                    data={songData.songs}
                    horizontal
                    renderItem={returnItem}
                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                    key={(item) => item}
                    contentContainerStyle={
                        {
                            gap: 10,
                            paddingHorizontal: 10,
                            alignItems: 'center'
                        }
                    }
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )

}

export default Lists