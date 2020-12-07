import React from "react";
import {Text,View,Button} from "react-native";

export default function LoginScreen({navigation}){
    return(
        <View>
            <Text>Hello</Text>
            <Button onPress={()=>navigation.navigate('SignUp')} title="Sign up" />
            <Button onPress={()=>navigation.navigate('Image')} title="Go to image screen" />
        </View>
    )
}