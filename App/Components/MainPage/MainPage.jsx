import {
    View,
    Text,
    SafeAreaView,
    Image,
    Pressable,
    TouchableOpacity,
    StatusBar
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './StyleMainPage'

const MainPage = () => {
    const NaviGation = useNavigation()
    const SendToPage = (route) => {
        NaviGation.navigate(route)
    }

    return (
        <View style={styles.container}>

            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
            <View style={styles.imagecontainer}>
                <Image
                    style={styles.img}
                    source={require('../../assets/img/Main.jpg')}
                />
            </View>
            <View style={[styles.box, styles.dspflex]}>
                <Text style={styles.textname}>Melody Music</Text>
                <Text style={styles.textinfo}>Introducing My Melody, your ultimate music companion. Immerse yourself in a world of rhythm and harmony with our innovative music app. Discover curated playlists, explore a vast library of tracks, and create your personalized soundtracks effortlessly</Text>
                <View style={[styles.btncontainer, styles.dspflex]}>
                    <TouchableOpacity
                        style={[styles.button, styles.dspflex]}
                        onPress={() => { SendToPage('signup') }}
                    >
                        <Text style={styles.btntext}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.dspflex]}
                        onPress={() => { SendToPage("signin") }}
                    >
                        <Text style={styles.btntext}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default MainPage