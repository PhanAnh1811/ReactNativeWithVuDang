import React, { Component, useReducer, useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import ButtonCustom from './src/components/ButtonCustom';

import reducer from './src/reducers/ColorReducer';
import counterReducer from './src/reducers/CounterReducer';
import EmailScreen from './src/Screen/EmailScreen';
import PasswordScreen from './src/Screen/PasswordScreen';
const App = () => {

  // const [counter, setCounter] = useState(0);

  // const initialState = {
  //   red: 0,
  //   green: 0,
  //   blue: 0
  // }

  // const [state, dispatch] = useReducer(reducer, initialState);
  // const { red, green, blue } = state;
  // const COLOR_VALUE = 15;
  // console.log(state);

  const initialState = {
    counter: 0
  }
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const { counter } = state;
  const COUNTER_VALUE = 1;
  console.log(state);

  //Build app add color random
  const RandomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  }

  const [colors, setColors] = useState([]);

  return (
    <View >
      {/* <View>
      <ButtonCustom name="Increase" func={() => setCounter(counter + 1)} />
      <ButtonCustom name="Decrease" func={() => setCounter(counter - 1)} />
      <Text>Current count:{counter}</Text>

      <ButtonCustom name="ADD A COLOR" func={() => setColors([...colors, RandomRgb()])} />
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
        {/* <Text>Red</Text>
        <ButtonCustom name="More Red" func={() => dispatch({ type: 'red', payload: COLOR_VALUE })} />
        <ButtonCustom name="Less Red" func={() => dispatch({ type: 'red', payload: COLOR_VALUE * -1 })} />

        <Text>Green</Text>
        <ButtonCustom name="More Green" func={() => dispatch({ type: 'green', payload: COLOR_VALUE })} />
        <ButtonCustom name="Less Green" func={() => dispatch({ type: 'green', payload: COLOR_VALUE * -1 })} />

        <Text>Blue</Text>
        <ButtonCustom name="More Blue" func={() => dispatch({ type: 'blue', payload: COLOR_VALUE })} />
        <ButtonCustom name="Less Blue" func={() => dispatch({ type: 'blue', payload: COLOR_VALUE * -1 })} />

        <View style={{ width: 150, height: 150, backgroundColor: `rgb(${red},${green},${blue})` }}></View> */}

        <Text>Refactor Counter Project by Reducers</Text>
        <ButtonCustom name="Increase" func={() => dispatch({ type: 'increase', payload: COUNTER_VALUE })} />
        <ButtonCustom name="Decrease" func={() => dispatch({ type: 'decrease', payload: COUNTER_VALUE * -1 })} />
        <Text style={styles.text}>Current count:{counter}</Text>
        <EmailScreen />
        <PasswordScreen />
      </View>
      {/* <View style={styles.viewOnestyle}/>
      <View style={styles.viewTwoStyle}/>
      <View style={styles.viewThreeStyle}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20
  },

  container:{
    height:200,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
  },

  viewOnestyle:{
    backgroundColor:'red',
    width:100,
    height:100
  },
  viewTwoStyle:{
    backgroundColor:'green',
    width:100,
    height:100,
   alignSelf:'flex-end'
  },

  viewThreeStyle:{
    justifyContent:'flex-end',
    backgroundColor:'blue',
    width:100,
    height:100
  },
})

export default App;