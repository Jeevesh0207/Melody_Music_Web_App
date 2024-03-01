import {
    View,
    Text,
    FlatList,
    Dimensions,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'

import styles from './StyleArtist'
import Entypo from 'react-native-vector-icons/Entypo'
import { useEffect, useState } from 'react'
import { useSongAuth } from '../../Hook/Song'
import { useNavigation } from '@react-navigation/native'


const TopArtist = ({ Data }) => {
    const SongAuth = useSongAuth()
    const NaviGation = useNavigation()
    const SendToArtist = async (path, item) => {
        NaviGation.navigate(path, {
            Data: item
        })
    }
    const returnItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => { SendToArtist('topartistalbum', item) }}
        >
            <View style={styles.Box} key={item} >
                <View style={styles.boxbanner}>
                    {
                        (item.url) &&
                        <Image
                            source={{
                                uri: item.url
                            }}
                            style={styles.imgBanner}
                        />
                    }
                </View>
                <View style={styles.titlebox}>
                    <Text style={styles.titlename} numberOfLines={1} ellipsizeMode='tail'>{item.Name}</Text>
                    {
                        (item.songs) && <Text style={styles.titlesinger} numberOfLines={1} ellipsizeMode='tail' >Top {item.songs.length}</Text>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
    const SendToPage = (route) => {
        NaviGation.navigate(route, {
            Data: Data
        })
    }
    return (
        <View style={styles.cotainer}>
            <View style={styles.toptitle}>
                <Text style={styles.toptitletext}>Top Artist</Text>
                <TouchableOpacity
                    onPress={() => SendToPage('topartist')}
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
                    data={Data}
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

export default TopArtist