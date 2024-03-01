import {
    View,
    Text,
    TouchableOpacity,
    Keyboard
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'react-native-linear-gradient'
import styles from './StyleNavBar'
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
const NavBar = () => {
    const [isFocused, SetisFocused] = useState(1)
    const NaviGation = useNavigation()
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const RouteData = ["home", "search", "library", "user"]
    const SetFocusedRoute = (id) => {
        SetisFocused(id)
        NaviGation.navigate(RouteData[id - 1])
    }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setIsKeyboardOpen(true);
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setIsKeyboardOpen(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <>
            {
                (!isKeyboardOpen) &&
                <View style={styles.container}>
                    <View style={styles.subcontainer}>
                        <LinearGradient
                            start={{ x: 0, y: 1 }}
                            end={{ x: 0, y: 0 }}
                            colors={['#000','rgba(0,0,0,0.7)' ]}
                            style={styles.lineargradient}
                        />
                        <TouchableOpacity style={styles.makecenter}
                            onPress={() => { SetFocusedRoute(1) }}
                        >
                            <View style={styles.Box}>
                                <View style={[styles.miniBox, styles.makecenter]}>
                                    <Ionicons name={(isFocused === 1) ? "home" : "home-outline"}
                                        size={23}
                                        color={(isFocused === 1) ? '#fff' : '#b7b7b7'}
                                    />
                                </View>
                                <Text style={[styles.labeltext, (isFocused === 1) ? { color: '#fff' } : { color: '#e5e5e5' }]}>Home</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.makecenter}
                            onPress={() => { SetFocusedRoute(2) }}
                        >
                            <View style={styles.Box}>
                                <View style={[styles.miniBox, styles.makecenter]}>
                                    <Ionicons name={(isFocused === 2) ? "search" : "search-outline"}
                                        size={23}
                                        color={(isFocused === 2) ? '#fff' : '#b7b7b7'}
                                    />
                                </View>
                                <Text style={[styles.labeltext, (isFocused === 2) ? { color: '#fff' } : { color: '#e5e5e5' }]}>Search</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.makecenter}
                            onPress={() => { SetFocusedRoute(3) }}
                        >
                            <View style={styles.Box}>
                                <View style={[styles.miniBox, styles.makecenter]}>
                                    <FontAwesome name={(isFocused === 3) ? "bookmark" : "bookmark-o"}
                                        size={23}
                                        color={(isFocused === 3) ? '#fff' : '#b7b7b7'}
                                    />
                                </View>
                                <Text style={[styles.labeltext, (isFocused === 3) ? { color: '#fff' } : { color: '#e5e5e5' }]}>Library</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.makecenter}
                            onPress={() => { SetFocusedRoute(4) }}
                        >
                            <View style={styles.Box}>
                                <View style={[styles.miniBox, styles.makecenter]}>
                                    <FontAwesome name={(isFocused === 4) ? "user" : "user-o"}
                                        size={(isFocused === 4) ? 24 : 22}
                                        color={(isFocused === 4) ? '#fff' : '#b7b7b7'}
                                    />
                                </View>
                                <Text style={[styles.labeltext, (isFocused === 4) ? { color: '#fff' } : { color: '#e5e5e5' }]}>User</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </>
    )
}

export default NavBar