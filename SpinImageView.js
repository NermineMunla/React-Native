import Expo from "expo";
import React from "react";
import { StyleSheet, View, Animated, PanResponder, Image } from "react-native";

export class SpinImageView extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
      index: 0,
      imageSrc: this.props.imagesArray[0].img
    };
  }

nextIndex(){
  if(this.state.index == this.props.imagesArray.length-1){
    this.state.index = 0;
  }else{
    this.state.index++;
  }
  this.setState({imageSrc: this.props.imagesArray[this.state.index].img});
}
previousIndex(){
  if(this.state.index == 0){
    this.state.index = this.props.imagesArray.length-1;
  }else{
    this.state.index--;
  }
  this.setState({imageSrc: this.props.imagesArray[this.state.index].img});
}
  componentWillMount() {
    this._val = { x: 0, y: 0 };
    this.state.pan.addListener(value => (this._val = value));
    var dx1 = 0 ;
    var dx2 = 0;
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e, gesture) => {
        this.state.pan.setOffset({
          x: this._val.x,
          y: this._val.y
        });
        this.state.pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: 
      (e, gesture) => {
        dx2 = gesture.dx
         if(Math.abs(dx1 - dx2) > 10) {
           dx1 = dx2
          if (dx2 < 0){
            this.nextIndex();
          }else {
            this.previousIndex();
          }
         }
      }
    });
  }

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    };
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View
         {...this.panResponder.panHandlers}
          style={[panStyle, { flex:1, justifyContent: "center" }]}
        >
          <Image
            style={[{height: 300, width: 300}, this.props.style]}
            source={this.state.imageSrc}
          />
        </Animated.View>
      </View>
    );
  }

  start = () => {
    this.nexIndex();
    console.log(this.state.index);
  };
}