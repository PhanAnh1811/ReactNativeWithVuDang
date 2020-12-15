import React, { useState } from 'react';
import { TextInput, Text } from 'react-native';

const UselessTextInput = () => {
    const [email, setEmail] = useState('');

    console.log(email);
    return (
        <>
            <TextInput onChangeText={(text) => setEmail(text)} style={{ borderColor: 'gray', borderWidth: 1 }} />
            <Text>{email}</Text>
        </>
    )
}

export default UselessTextInput;