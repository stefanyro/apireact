import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

const SignIn = (props) => {
    console.log(props);
    const {navigation} = props;
    return (
        <View>
            <text>Componente SignIn</text>
        </View>
    )
} 
const SignUp = () => <text>Componente SignUp</text>


const RutasNoAutentificadas = StackNavigator({
    SignIn: {
        screen: SignIn
    },
    SignUp: {
        screen: SignUp
    }
});

export {RutasNoAutentificadas};
