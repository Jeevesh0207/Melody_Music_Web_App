import {
    Platform,
    StatusBar,
    StyleSheet,
} from 'react-native'

import { FONTS } from '../../constants'

const styles = StyleSheet.create({
    makecenter:{
        alignItems:'center',
        justifyContent:'center'
    },
    cotainer: {
        width: '100%',
        height: 230,
        backgroundColor: '#000'
    },
    toptitle: {
        width: '100%',
        height: 40,
        // backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        flexDirection: 'row'
    },

    toptitletext: {
        fontSize: 17,
        fontFamily: FONTS.RubikSemiBold,
        color:'#fff'
    },
    toptitleright: {
        width: 80,
        height: '100%',
        // backgroundColor: 'green',
        flexDirection:'row',
        
    },
    toptitlerighttext:{
        fontFamily:FONTS.RubikRegular,
        color:'#ccc'
    },
    toptitlerighticon:{
        color:'#ccc'
    },
    listcontainer: {
        width: '100%',
        height:190,
        // backgroundColor: 'skyblue',
        justifyContent: 'center',
    },
    Box: {
        width: 130,
        height: 175,
        // backgroundColor: 'lightgreen',
    },
    boxbanner: {
        width: '100%',
        height: 130,
        // backgroundColor: 'green',

    },
    imgBanner:{
        width:'100%',
        height:'100%',
        borderRadius:5
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
        paddingRight:4,
        color:'#fff'

    },
    titlesinger: {
        fontSize: 11,
        paddingLeft: 4,
        marginTop: -3,
        fontFamily: FONTS.RubikRegular,
        overflow: 'hidden',
        paddingRight:4,
        color:'#ccc'
    }
})

export default styles