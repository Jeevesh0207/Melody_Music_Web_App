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
        backgroundColor:'#000',
        justifyContent:'center',
        position:'relative'
    },
    topBanner:{
        width:'100%',
        height:200,
        // backgroundColor:'pink',
        justifyContent:'center',
        alignItems:'center'
    },
    profilepic:{
        width:100,
        height:100
    },
    Name:{
        fontSize:24,
        fontFamily:FONTS.RubikRegular,
        marginTop:10,
        color:'#fff'
    },
    UserName:{
        fontSize:20,
        fontFamily:FONTS.RubikRegular,
        color:'#ccc'
    },
    middle:{
        width:'100%',
        height:120,
        // backgroundColor:'yellow',
       alignItems:'center',
       justifyContent:'space-evenly'
    },
    button:{
       width:'80%',
       height:40,
       backgroundColor:'orange',
       borderRadius:50 
    },
    btntext:{
        fontSize:16,
        fontFamily:FONTS.RubikRegular,
        color:'#fff'
    },
    modal:{
        flex:1,
        width:'100%',
        height:400,
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        gap:10
    },
    modalcontainer:{
        width:'90%',
        height:50,
        // backgroundColor:'orange',
    },
    modaltext:{
        fontSize:16,
        fontFamily:FONTS.RubikRegular,
        textAlign:'center',
        color:'#fff'
    },
    modalbanner:{
        width:130,
        height:130
    }
})

export default styles