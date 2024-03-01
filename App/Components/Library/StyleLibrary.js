import{
    Platform,
    StatusBar,
    StyleSheet
}from 'react-native'
import {FONTS} from '../../constants'

const styles=StyleSheet.create({
    makecenter:{
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        flex:1,
        paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0,
        backgroundColor:'#000'
    },
    topheadBox:{
        width:'100%',
        height:80,
        // backgroundColor:'pink',
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center'
    },
    topprofileBox:{
        width:40,
        height:40,
        backgroundColor:'orange',
        marginLeft:10,
        borderRadius:100
    },
    topheadtext:{
        fontSize:23,
        fontFamily:FONTS.RubikMedium,
        marginLeft:10,
        color:'#ccc'
    },
    firstName:{
        fontSize:22,
        fontFamily:FONTS.RubikRegular
    },
    itemcontainer:{
        flex:1,
        // backgroundColor:'orange',
        position:'relative'
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