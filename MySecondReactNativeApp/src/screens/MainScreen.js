import React from 'react'
import { View, Text, Button } from 'react-native'

export default function MainScreen({navigation}) {
    return (
        <View>
            <Text>MainScreen</Text>
            <Button onPress={()=>navigation.navigate('Auth')} title="BACK TO HOME"></Button>
        </View>
    )
}
