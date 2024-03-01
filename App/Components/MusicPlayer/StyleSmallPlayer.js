import {
    StyleSheet,
} from 'react-native'
import { FONTS } from '../../constants'
const styles = StyleSheet.create({
    makecenter:{
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        position:'absolute',
        left:0,
        bottom:55,
        width:'100%',
        height:54,
        // backgroundColor:'pink'
    },
    
    minicontainer:{
        width:'100%',
        height:'100%',
        position:'relative'
    },
    lineargradient:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0, 
    },
    subcontainer:{
       width:'97%',
       height:50,
       borderRadius:5,
       flexDirection:'row',
       justifyContent:'space-between',
       overflow:'hidden'
    },
    subcontainerLeft:{
        width:200,
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        overflow:'hidden'
    },
    subcontainerLeftL:{
        width:45,
        height:'80%',
        // backgroundColor:'yellow',
        borderRadius:5,
        marginLeft:5,
        overflow:'hidden'
    },
    ytimage:{
        width:'100%',
        height:'100%',
     },
    subcontainerLeftR:{
        width:140,
        height:'95%',
        marginLeft:8,
        overflow:'hidden',
        justifyContent:'center'
    },
    subcontainerLefttext:{
        fontSize:13,
        fontFamily:FONTS.RubikRegular,
        overflow:'hidden'
    },
    songname:{
        fontFamily:FONTS.RubikMedium,
        color:"#fff"
    },
    singername:{
        fontSize:12,
        color:"#cccccc"
    },
    subcontainerRight:{
        width:90,
        height:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    videobox:{
        position:'absolute',
        left:0,
        top:0,
        width:100,
        height:100,
        // opacity:0,
    },
    miniloading:{
        height:'100%',
        width:50,
        // backgroundColor:'red',
        position:'relative',
        zIndex:1
    }
})

export default styles