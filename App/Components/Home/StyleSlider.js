import {
    StyleSheet,
    Dimensions
} from 'react-native'


const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 200,
        // backgroundColor:'pink',
        backgroundColor: '#000'

    },
    Box: (width) => ({
        width: width,
        height: 200,
        // borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'#ccc'
        
    }),
    image: {
        width: '97%',
        height: '100%',
        borderRadius: 10,
        borderWidth:2,
        borderColor:'#fff',
    
    }

})

export default styles