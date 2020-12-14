import React, { Component, useReducer, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import ButtonCustom from './src/components/ButtonCustom';

import reducer from './src/reducers/ColorReducer';

const App = () => {

  const [counter, setCounter] = useState(0);

  const initialState = {
    red: 0,
    green: 0,
    blue: 0
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const { red, green, blue } = state;
  console.log(state)


  const COLOR_VALUE = 20;
  //Build app add color random
  const RandomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  }

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
        <ButtonCustom name="Increase Red" func={() => dispatch({ type: 'red', payload: COLOR_VALUE })} />
        <ButtonCustom name="Decrease Red" func={() => dispatch({ type: 'red', payload: COLOR_VALUE * -1 })} />
        <Text>Blue</Text>
        <ButtonCustom name="Increase Blue" func={() => dispatch({ type: 'blue', payload: COLOR_VALUE })} />
        <ButtonCustom name="Decrease Blue" func={() => dispatch({ type: 'blue', payload: COLOR_VALUE * -1 })} />
        <Text>Green</Text>
        <ButtonCustom name="Increase Green" func={() => dispatch({ type: 'green', payload: COLOR_VALUE })} />
        <ButtonCustom name="Decrease Green" func={() => dispatch({ type: 'green', payload: COLOR_VALUE * -1 })} />
      </View>
      <View style={{ width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />

    </View>
  )
}


export default App;