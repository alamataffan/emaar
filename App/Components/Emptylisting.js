import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import {View,Text,FlatList, Colors, Fonts,Image, scale,Card, TouchableWithoutFeedback} from '../common'
import styles from './Styles/EmptylistingStyle'

const  Emptylisting = (props) =>{
  
    return (
      <View style={{}}>
              <View style={{justifyContent:"center",alignItems:"center",}}>
               <Card>
                <View style={{paddingHorizontal:scale(15),paddingVertical:scale(15)}}>
                  <Text style={{fontWeight:"bold"}}>{props.emptyText || 'No Calender Found'}</Text>
                </View>
              </Card>
               </View>
      </View>
    )
  
}

export default Emptylisting
