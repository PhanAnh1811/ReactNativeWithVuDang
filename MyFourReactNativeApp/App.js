import React, { Component, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import ButtonCustom from './src/components/ButtonCustom';

const App = () => {

  const [counter,setCounter]=useState(0);

  const COLOR_VALUE= 20;
  //Build app add color random
  const RandomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  }
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const [colors, setColors] = useState([]);

  return (
    <View>
      
      {/* <ButtonCustom name="Increase" func={()=>setCounter(counter+1)}/>
      <ButtonCustom name="Decrease" func={()=>setCounter(counter-1)}/>
      <Text>Current count:{counter}</Text>

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
      </View> */}
      
      <View>
        <Text>Red</Text>
        <ButtonCustom name="Increase Red" func={()=>setRed(red + COLOR_VALUE)}/>
        <ButtonCustom name="Decrease Red" func={()=>setRed(red-COLOR_VALUE)}/>
        <Text>Blue</Text>
        <ButtonCustom name="Increase Blue" func={()=>setBlue(blue+COLOR_VALUE)}/>
        <ButtonCustom name="Decrease Blue" func={()=>setBlue(blue-COLOR_VALUE)}/>
        <Text>Green</Text>
        <ButtonCustom name="Increase Green" func={()=>setGreen(green+COLOR_VALUE)}/>
        <ButtonCustom name="Decrease Green" func={()=>setGreen(green-COLOR_VALUE)}/>
      </View>
      <View style={{width:100,height:100,backgroundColor:`rgb(${red},${green},${blue})`}}/>

    </View>
  )
}


export default App;