import React, { Component, useState } from 'react';
import { Text, View,FlatList } from 'react-native';
import ButtonCustom from './src/components/ButtonCustom';


const App=()=>{
  const RandomRgb=()=>{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
  }
  const [colors,setColors]=useState([]);
console.log(colors);
  return(
    <View>
      <ButtonCustom name="ADD A COLOR" func={()=>setColors([...colors,RandomRgb()])} />   
      <View>
      <FlatList
        data={colors}
        renderItem={({item})=>{
          return(
            <View style={{width:100,height:100,backgroundColor:item}}></View>
          )
        }}
      />
      </View>
     
    </View>
  )
}

export default App;