import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import {View,Text,FlatList, Colors, Fonts,FastImage,Image, scale,Placeholder,PlaceholderMedia,ShineOverlay,PlaceholderLine} from '../common'
import styles from './Styles/PlaceholdermediaStyle'

 const Placeholdermedia = (props)=>{

    return (
      <View style={styles.container}>
         <Placeholder
      useNativeDriver ={true}
      Animation={ShineOverlay}
      style={{
        marginVertical: 6,
       
        borderRadius: 4
      }}
     
    >
        <PlaceholderMedia
          style={[
            props.style,
            { 
              justifyContent:"center",alignItems:"center",
              width: '100%',
              height: scale(120),
        
            }
          ]}
        />
     
    </Placeholder>
      </View>
    )
  }



export default Placeholdermedia