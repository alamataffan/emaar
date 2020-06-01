import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import {View,Text,FlatList, Colors, Fonts,FastImage,Image, scale} from '../common'
import styles from './Styles/ImagecardStyle'

const Imagecard = React.memo(props =>{
 
    return (
      <View style={{}}>
      {  (props.inApp) ?
       <FastImage  style= {[props.imageStyle,{}]} resizeMode={props.resizeMode} source={props.img}/> 
      : <FastImage  style= {[props.imageStyle,{}]} resizeMode={props.resizeMode} source={{uri :props.img, priority: FastImage.priority.normal,cache:FastImage.cacheControl.immutable}}/> }
      </View>
    )
 
})

export default Imagecard