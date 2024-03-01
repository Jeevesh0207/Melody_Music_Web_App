import{
    Platform,
    StyleSheet,
    StatusBar
}from 'react-native'

import {FONTS} from '../../constants'

const styles=StyleSheet.create({
    dspflex:{
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        flex:1,
        backgroundColor:'#433332',
        // paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    imagecontainer:{
        width:'100%',
        height:300,
    },
    img:{
        width:'100%',
        height:'100%',
        objectFit:'cover'
    },
    box:{
        flex:1,
        backgroundColor:'#433332',
        gap:10,
    },
    textname:{
        fontSize:45,
        fontFamily:FONTS.Merienda,
        textAlign:'center',
        paddingTop:10,
        paddingBottom:10,
        color:'#fff'
    },
    textinfo:{
        fontSize:14,
        padding:10,
        textAlign:'center',
        fontFamily:FONTS.RubikRegular,
        paddingTop:10,
        paddingBottom:10,
        color:'#fff'
    },
    btncontainer:{
        width:'100%',
        height:200,
        flexDirection:'column',
        gap:20
    },
    button:{
        width:300,
        height:43,
        backgroundColor:'#f37646',
        borderRadius:50
    },
    btntext:{
        color:'#fff',
        fontSize:15,
        fontFamily:FONTS.RubikRegular,
    },
    
   
})

export default styles