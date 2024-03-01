import{
    StyleSheet
}from 'react-native'
import {FONTS} from '../../constants'
const styles=StyleSheet.create({
    container:{
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%',
        height:55,  
    },
    subcontainer:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        // backgroundColor:'#000'
    },
    Box:{
       width:70,
       height:'100%',
       alignItems:'center',
       justifyContent:'center',
    //    backgroundColor:'yellow'
    },
    miniBox:{
       width:30,
       height:25,
    },
    makecenter:{
        alignItems:'center',
        justifyContent:'center'
    },
    labeltext:{
        fontSize:10,
        fontFamily:FONTS.RubikRegular
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