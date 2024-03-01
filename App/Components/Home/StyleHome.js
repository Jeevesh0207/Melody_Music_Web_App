import{
    Platform,
    StatusBar,
    StyleSheet,
}from 'react-native'

const styles=StyleSheet.create({
    container:{
        width:'100%',
        paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0,
        position:'relative'
    }
})

export default styles