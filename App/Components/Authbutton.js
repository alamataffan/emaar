import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableWithoutFeedback } from 'react-native'
import styles from './Styles/AuthbuttonStyle'
import {
  Button,
  Content,
  Root
} from "native-base";
import FastImage from 'react-native-fast-image';
import { scale } from "react-native-size-matters";



export default class Authbutton extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View >
     
      <View >
      <Button style={[this.props.buttonStyle,{height:scale(50)}]} full onPress={()=>{this.props.onPressAuth()}}>
   
          <Text style={[this.props.buttonTextStyle,]}>{this.props.buttonText}</Text>
       
        </Button>
        </View>
        
      </View>
    )
  }
}
