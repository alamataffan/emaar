import React, { } from 'react'
// import PropTypes from 'prop-types';
import { View, Text ,TextInput,TouchableWithoutFeedback,Fonts,scale,Button} from '../common'
import styles from './Styles/AuthbuttonStyle'
 const  Authbutton = (props) => {
 
    return (
      <View >
        <Button style={[props.buttonStyle,{height:scale(50)}]} full onPress={()=>{props.onPressAuth()}}>
            <Text style={[props.buttonTextStyle,]}>{props.buttonText}</Text>
        </Button>
      </View>
     
    )
  
}

export default  Authbutton
