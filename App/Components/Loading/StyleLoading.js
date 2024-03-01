import{
    StyleSheet,
}from 'react-native'
import {FONTS} from '../../constants'
const styles=StyleSheet.create({
    loadingcontainer:(bgColor)=>({
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        zIndex:2,
        backgroundColor:(bgColor)?bgColor:'rgba(243,118,70,0.2)',
        alignItems:'center',
        justifyContent:'center'
    }),
    image:(size)=>({
        width:(size)?size:150,
        height:(size)?size:150,
        // backgroundColor:'pink'
    })
    
})

export default styles