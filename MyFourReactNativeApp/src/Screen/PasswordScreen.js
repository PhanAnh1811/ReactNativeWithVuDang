import React, { useState } from 'react';
import {Text,TextInput} from 'react-native';

const UselessTextInput=()=>{
    const[pass,setPass]=useState('');
    
    return(
        <>
        <TextInput secureTextEntry onChangeText={(text)=>setPass(text)} style={{borderWidth:1,borderColor:'gray'}}/>
        {pass.length > 5 ? null :<Text>Password must be greater than 5 characters</Text>}
        </>
    )
}

export default UselessTextInput;