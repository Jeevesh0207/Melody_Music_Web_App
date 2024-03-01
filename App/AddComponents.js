import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    StatusBar,
    Platform
} from 'react-native';
import { FONTS } from './constants';

import { NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import  {MainPage, SignUp, SignIn, Otp, Forgot, Home, NavBar, Search, Library, User,SmallPlayer,Album,TopArtist,TopArtistAlbum}  from './Components';
import { useAuth } from './Hook/Auth';

const Stack = createNativeStackNavigator()

export default function AddComponents() {
    const Auth = useAuth()

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={(Auth.isLogin ? 'home' : 'main')}
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    {
                        (!Auth.isLogin) ?
                            <>
                                <Stack.Screen name='main' component={MainPage} />
                                <Stack.Screen name='signup' component={SignUp} />
                                <Stack.Screen name='signin' component={SignIn} />
                                <Stack.Screen name='otp' component={Otp} />
                                <Stack.Screen name='forgot' component={Forgot} />
                            </> :
                            <>
                                <Stack.Screen name='home' component={Home} />
                                <Stack.Screen name='search' component={Search} />
                                <Stack.Screen name='library' component={Library} />
                                <Stack.Screen name='user' component={User} />
                                <Stack.Screen name='album' component={Album}/>
                                <Stack.Screen name="topartist" component={TopArtist}/>
                                <Stack.Screen name="topartistalbum" component={TopArtistAlbum}/>
                            </>
                    }

                </Stack.Navigator>
                {
                    (Auth.isLogin) && <SmallPlayer/>
                }
                {
                    (Auth.isLogin) && <NavBar />
                }
            </NavigationContainer>

        </View> 

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
})