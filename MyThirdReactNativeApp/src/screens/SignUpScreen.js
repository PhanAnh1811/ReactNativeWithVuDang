import React from "react";
import {Text,View,Button} from "react-native";

export default function SignUpSrceen({navigation}){
    return(
        <View>
            <Text>abcdefafasf</Text>
            <Button onPress={()=>navigation.navigate('Login')} title="Back to login screen"/>
        </View>
    )
}