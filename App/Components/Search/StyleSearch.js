import {
    Platform,
    StatusBar,
    StyleSheet
} from 'react-native'
import { FONTS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#000'
    },
    searchBox: {
        width: '100%',
        height: 70,
        // backgroundColor:'orange',
        justifyContent: 'center',
        alignItems: 'center',

    },
    searchsubBox: {
        width: '95%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative'
    },
    input: {
        width: '100%',
        height: '100%',
        paddingTop: 0,
        paddingBottom: 0,
        fontSize: 16,
        fontFamily: FONTS.RubikRegular,
        paddingLeft: 52,
        color: '#000'
    },
    iconBox: {
        position: 'absolute',
        width: 55,
        height: '100%',
        // backgroundColor:'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemcontainer: {
        flex: 1,
        // backgroundColor: 'orange'
    },
    songbox: {
        width: 90,
        height: 180,
        flex: 1,
        margin: 3,
        // backgroundColor:'blue'
        borderRadius:4

    },
    boxbanner: {
        width: '100%',
        height: 130,
    },
    imgBanner: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    titlebox: {
        width: '100%',
        height: 45,
        // backgroundColor: 'yellow',
    },
    titlename: {
        paddingTop: 3,
        paddingLeft: 4,
        fontSize: 12,
        fontFamily: FONTS.RubikSemiBold,
        overflow: 'hidden',
        paddingRight: 4,
        color: '#fff'

    },
    titlesinger: {
        fontSize: 11,
        paddingLeft: 4,
        marginTop: -3,
        fontFamily: FONTS.RubikRegular,
        overflow: 'hidden',
        paddingRight: 4,
        color: '#ccc'
    },
})

export default styles