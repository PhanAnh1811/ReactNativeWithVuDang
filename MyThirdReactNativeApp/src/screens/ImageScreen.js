import React from "react";
import {Text,View,Button} from "react-native";

export default function ImageScreen({navigation}){
    return(
        <View>
            <Text>hahahahahahahahahaaaahahaa</Text>
            <Button onPress={()=>navigation.navigate('Login')} title="Back to login srceen"/>
        </View>
    )
}