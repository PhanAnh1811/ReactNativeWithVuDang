import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

import AuthScreen from '../screens/AuthScreen';
import MainScreen from '../screens/MainScreen';


const Stack = createStackNavigator();


function MyStack(){
    return(
        <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen}/>
        <Stack.Screen name="Main" component={MainScreen}/>
    </Stack.Navigator>
    )
   
}

export default () => {
    return(
        <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
    )

}