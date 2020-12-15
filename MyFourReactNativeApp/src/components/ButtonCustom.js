import React from 'react'
import { View, Text, Button } from 'react-native'

export default function ButtonCustom({ name, func }) {
    return (
        <Button title={name} onPress={func} />
    )
}
