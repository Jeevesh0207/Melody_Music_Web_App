import {
    Dimensions,
    FlatList,
    Text,
    View,
    Animated,
    ScrollView,
    Button,
    Image,
    TouchableOpacity
} from 'react-native'

import styles from './StyleSlider'
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';
const width = Dimensions.get('window').width

const Slider = ({ SliderImage }) => {
    const NaviGation = useNavigation()
    const SendToPage = (path) => {
        NaviGation.navigate('album', {
            path: path,
            SliderImage: SliderImage,
            isfromSlider: true
        })
    }
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={()=>{SendToPage(item.Name)}}
            >
                <View key={item.id} style={[styles.Box(width)]}>
                    <Image
                        source={{
                            uri: item.url
                        }}
                        style={styles.image}
                    />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <Carousel
                width={width}
                height={'100%'}
                data={SliderImage}
                autoPlay
                mode='parallax'
                parallaxScrollingScale={0.9}
                parallaxScrollingOffset={50}
                renderItem={(item) => renderItem(item)}
                scrollAnimationDuration={1000}
            />

        </View>
    )
}

export default Slider