import React from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";

// Tạo object chứa tên,tuổi,ngày sinh
// Dùng react native api để hiển thị ra màn hình

const obj = {
  name: "Phan Tuấn Anh",
  age: 20,
  date: "18 / 11 / 2000",
  uri: "https://www.winklix.com/blog/wp-content/uploads/2019/02/all-about-react-native-apps-776x415.png"
}
const url='./assert/react.png';

const DATA = [
  {
    id: "1",
    name: "Hy Khang",
    // image:"https://www.winklix.com/blog/wp-content/uploads/2019/02/all-about-react-native-apps-776x415.png"
    image:require(url)    
  },

  {
    id: "2",
    name: "Tuấn Anh",
    // image:"https://www.winklix.com/blog/wp-content/uploads/2019/02/all-about-react-native-apps-776x415.png"
    image:require(url)   
  },

  {
    id: "3",
    name: "Gia Vũ",
    // image:"https://www.winklix.com/blog/wp-content/uploads/2019/02/all-about-react-native-apps-776x415.png"
    image:require(url)   
  },

  {
    id: "4",
    name: "Trần Vũ",
    // image:"https://www.winklix.com/blog/wp-content/uploads/2019/02/all-about-react-native-apps-776x415.png"
    image:require(url)   
  },

  {
    id: "5",
    name: "Minh Trường",
    // image:"https://www.winklix.com/blog/wp-content/uploads/2019/02/all-about-react-native-apps-776x415.png"
    image:require(url)   
  },

  {
    id: "6",
    name: "Quang Tường",
    // image:"https://www.winklix.com/blog/wp-content/uploads/2019/02/all-about-react-native-apps-776x415.png"
    image:require(url)   
  },

  {
    id: "7",
    name: "Quang Tường",
    // image:"https://www.winklix.com/blog/wp-content/uploads/2019/02/all-about-react-native-apps-776x415.png"
    image:require(url)   
  },
  
  {
    id: "8",
    name: "Quang Tường",
    // image:"https://www.winklix.com/blog/wp-content/uploads/2019/02/all-about-react-native-apps-776x415.png"
    image:require(url)   
  },

  {
    id: "9",
    name: "Quang Tường",
    // image:"https://www.winklix.com/blog/wp-content/uploads/2019/02/all-about-react-native-apps-776x415.png"
    image:require(url)   
  },

  {
    id: "10",
    name: "Quang Tường",
    // image:"https://www.winklix.com/blog/wp-content/uploads/2019/02/all-about-react-native-apps-776x415.png"
    image:require(url)   
  },
]
const App = () => {
  return (
    <View>

      <View>
        <Text style={styles.idName}>My name is {obj.name}</Text>
        <Text style={styles.idAge}>Age:{obj.age}</Text>
        <Text style={styles.idDate}>Date:{obj.date}</Text>
        <Image style={styles.imageView} source={{ uri: obj.uri }}></Image>
      </View>

      <View>
        <FlatList
          data={DATA}
          keyExtractor={e => e.id}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.id} - {item.name}</Text>
                <Image source={item.image} style={{width:100,height:100}}/>
              </View>
            )
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  imageView: {
    width: 420,
    height: 200
  },
  idName: {
    fontWeight: "bold",
    color: "green",
    fontSize: 30
  },
  idAge: {
    fontStyle: "italic",
    fontSize: 20,
    color: "red"
  },
  idDate: {
    fontStyle: "normal",
    fontSize: 15,
    color: "blue"
  }
})

export default App;

