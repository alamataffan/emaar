import React, { useState } from 'react'
import {Toast} from '../common'
import styles from './Styles/HocScreenStyle'

const  HocScreen = OriginalComponent => {
  
  const NewComponent = (props) =>{
  const {navigation} = props;


    showToastMethod = (text = null, type, duration = 3000, ) =>{
      Toast.show({
        text: text,
        buttonText: "Okay",
        duration: duration,
        type :type
      })
    }

    const navigateTo = (screenName,data) => {
      navigation.navigate(screenName)
    }
  
  

    return (
      <OriginalComponent 
      navigateTo ={navigateTo}
      showToastMethod ={showToastMethod}

      />
    )
  };
    return NewComponent
  }

  export  default HocScreen;

