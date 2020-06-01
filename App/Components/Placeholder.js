import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import {View,Text,FlatList, Colors, Fonts,FastImage,Image, scale,Placeholder,PlaceholderMedia,ShineOverlay,PlaceholderLine} from '../common'
import styles from './Styles/PlaceholderStyle'

const Placeholder2 = props =>{
  

  const renderItem = ({ item }) => {
 
    return (
      <Placeholder
    Animation={ShineOverlay}
    style={{
      borderRadius:scale(8),
       borderColor:Colors.appGray, 
    
      padding:scale(10),
      borderWidth:scale(0.5),
   
    }}
  
  >
       {props.showPlaceHolderMedia ? <PlaceholderMedia
          style={[
            props.style,
            { 
              justifyContent:"center",alignItems:"center",
              width: scale(120),
              height: scale(120),
        
            }
          ]}
        />
       : <PlaceholderLine style={{ marginTop: scale(15) }} width={scale(80)} />}
    <PlaceholderLine style={{ marginTop: scale(15) }} width={scale(80)} />
    <PlaceholderLine style={{ marginTop: scale(5) }} width={scale(40)} />
    <PlaceholderLine style={{marginTop: scale(5)}} width={scale(20)} />
  </Placeholder>
    );
  }


  
  return(
    <View style={{}}>
    <View style={{marginTop:scale(15),marginHorizontal:scale(15)}}>
    <Placeholder
    Animation={ShineOverlay}
    style={{
    }}
  
  >
        
   {props.showTitle ? <PlaceholderLine style={{ marginTop: scale(0) }} width={scale(20)} /> :<Text/>}
  </Placeholder>
      <FlatList
          showsVerticalScrollIndicator={false}
          horizontal={props.horizontal}
          data={props.categoryData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{justifyContent:"space-between"}}
          ItemSeparatorComponent={() => <View style={{margin: 4}}/>}
          
        />
    </View>
  </View>
  )

}

export default Placeholder2;