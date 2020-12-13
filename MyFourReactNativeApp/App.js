import React, { Component, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import ButtonCustom from './src/components/ButtonCustom';


const App = () => {

  //Build app add color random
  const RandomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  }
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(1);
  const [green, setGreen] = useState(2);
  const [colors, setColors] = useState([]);
  console.log(colors);

  return (
    <View>
      
      <ButtonCustom name="ADD A COLOR" func={() => setColors([...colors, RandomRgb()])} />
      <View>
        <FlatList
          data={colors}
          keyExtractor={i => i}
          renderItem={({ item }) => {
            return (
              <View style={{ width: 100, height: 100, backgroundColor: item }}></View>
            )
          }}
        />
      </View>
     
    </View>
  )
}


export default App;