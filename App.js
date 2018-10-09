import Expo from "expo";
import React from "react";
import { View } from "react-native";
import { SpinImageView } from "./SpinImageView";

const array = [
  { 
    img: require('./images/01.jpg')
  },{
    img: require('./images/03.jpg')
  },{
    img: require('./images/05.jpg')
  },{
    img: require('./images/07.jpg')
  },{
    img: require('./images/09.jpg')
  },{
    img: require('./images/11.jpg')
  },{ 
    img: require('./images/13.jpg')
  },{
    img: require('./images/15.jpg')
  },{
    img: require('./images/17.jpg')
  },{
    img: require('./images/19.jpg')
  },{
    img: require('./images/21.jpg')
  },{
    img: require('./images/23.jpg')
  },{
    img: require('./images/25.jpg')
  }
];

export default class App extends React.Component {
 
  render() {
    return (
      <View style={{backgroundColor: 'white', flex:1}}>
      <SpinImageView imagesArray= {array}></SpinImageView>
      </View>
    );
  }
}