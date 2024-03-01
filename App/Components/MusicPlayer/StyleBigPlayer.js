import {
    StyleSheet,
    StatusBar,
    Platform
} from 'react-native'
import { FONTS } from '../../constants'
const styles = StyleSheet.create({
    makecenter:{
        justifyContent:'center',
        alignItems:'center'
    },
    lineargradient:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0, 
    },
    maincontainer:{
        flex:1,
        zIndex:1
    },
    topBar:{
        width:'100%',
        height:60,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    topBarLeft:{
        width:40,
        height:40,
        marginLeft:10,
    },
    topBarmid:{
        width:170,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    topBarmidtoptext:{
        fontSize:12,
        color:"#fff"
    },
    topBarmidbottomtext:{
        fontSize:13,
        fontFamily:FONTS.RubikSemiBold,
        color:"#cccccc"
    },
    topBarright:{
        width:40,
        height:40,
        marginRight:10
    },
    BannerContainer:{
        width:'100%',
        height:400,
    },
    imagebanner:{
       width:'85%',
       height:300,
       borderRadius:10,
       overflow:'hidden',
       elevation:4,
        shadowColor:'#999999'
    },
    ytimage:{
       flex:1,
       width:'100%',
       height:'100%',
    },
    DetailContainer:{
        width:'100%',
        height:70,
        alignItems:'center'
    },
    DetailsubContainer:{
        width:'85%',
        height:70,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    DetailContainerLeft:{
       width:'60%',
       height:'100%',
       justifyContent:'center',
    },
    DetailContainerLefttoptext:{
        fontSize:20,
        fontFamily:FONTS.RubikSemiBold,
        overflow:'hidden',
        color:"#fff"
    },
    DetailContainerLeftbottomtext:{
        fontSize:16,
        fontFamily:FONTS.RubikRegular,
        overflow:'hidden',
        color:"#cccccc"
    },
    DetailContainerRight:{
        width:50,
        height:'100%',
    },
    Track:{
       width:'100%',
       height:55,
       alignItems:'center',
    },
    TrackContainer:{
        width:'83%',
        height:'98%',
        justifyContent:'center',
        position:'relative'
    },
    TrackContainerL:{
        position:'absolute',
        bottom:0,
        left:0,
        fontSize:11,
        fontFamily:FONTS.RubikRegular,
        color:"#cccccc"
    },
    TrackContainerR:{
        position:'absolute',
        bottom:0,
        right:0,
        fontSize:11,
        fontFamily:FONTS.RubikRegular,
        color:"#cccccc"
    },
    controls:{
        width:'100%',
        height:100,
        alignItems:'center'
    },
    controlscontainer:{
        width:'85%',
        height:100,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    controlscontainerL:{
        width:50,
        height:100,
    },
    controlscontainerM:{
        width:180,
        height:100,
        gap:20,
        
    },
    controlscontainerMplay:{
        width:65,
        height:65,
        backgroundColor:"#fff",
        borderRadius:100,
        position:'relative',
        overflow:'hidden'
        // backgroundColor:'orange'
    },
    controlscontainerR:{
        width:50,
        height:100,
    },

    lyricsContainer:{
        width:'100%',
        height:400,
        // backgroundColor:'orange',
        paddingBottom:10,
        
    },
    mainlyricsContainer:{
        width:'85%',
        height:340,
        // backgroundColor:'green',
        borderRadius:20,
        overflow:'hidden',
        position:'relative'
    },
    lyricstitle:{
        fontSize:18,
        fontFamily:FONTS.RubikSemiBold,
        paddingLeft:20,
        paddingTop:20,
        color:'#fff'
    },
    alllinecontainer:{
        width:'100%',
        height:'100%',
        // backgroundColor:'red',
    },
    suballlinecontainer:{
        width:'100%',
        height:'100%',
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:10,
        // backgroundColor:'orange'
    },
    makecentersuballlinecontainer:{
        width:'100%',
        height:250,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'plum'
    },
    eachlinestyle:{
        paddingTop:4,
        paddingBottom:4,
    },
    eachlinetext:{
        fontSize:18,
        fontFamily:FONTS.RubikRegular,
        color:'#cccccc'
    },
    nodatatext:{
        fontSize:30,
        fontFamily:FONTS.RubikRegular,
        color:'#cccccc'
    }

})

export default styles