import {
    Platform,
    StatusBar,
    StyleSheet,
} from 'react-native'

import { FONTS } from '../../constants'

const styles = StyleSheet.create({
    makecenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#000',
        position:'relative'
    },
    topmenu: {
        width: '100%',
        height: 50,
        // backgroundColor: '#000',
        flexDirection: 'row',
    },
    topmenuleft: {
        width: '15%',
        height: '100%',
        // backgroundColor:'green'
    },
    topmenumid: {
        width: '70%',
        height: '100%',
        // backgroundColor:'skyblue'
    },
    topmenuright: {
        width: '15%',
        height: '100%',
        // backgroundColor:'green'
    },
    topinputbox: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 16,
        fontFamily: FONTS.RubikRegular,
        color: '#ccc',
        paddingTop: 0,
        paddingBottom: 0
    },
    bannerConatiner: {
        width: '100%',
        height: 200,
        // backgroundColor: '#000'
    },
    topheadtext:{
        color:'#fff',
        fontSize:40,
        fontFamily:FONTS.Merienda
    },
    imgbanner: {
        width: '95%',
        height: 180,
        borderRadius: 10,
        overflow: 'hidden',
        borderColor:'#fff',
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center'
    },
    imagebg: {
        width: '100%',
        height: '100%'
    },
    itemsconatiner: {
        width: '100%',
        height: 400,
        flex:1,
    },
    songbox: {
        width: 90,
        height: 180,
        flex: 1,
        margin: 3,

    },
    boxbanner: {
        width: '100%',
        height: 130,
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
    },
    lineargradient:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0, 
    },
})

export default styles