import React from 'react'
import { View, Text, Button } from 'react-native'

export default function AuthScreen({navigation}) {
    return (
        <View>
            <Text>AuthScreen</Text>
            <Button onPress={() => navigation.navigate('Main')} title="GO to home"/>
        </View>
    )
}
