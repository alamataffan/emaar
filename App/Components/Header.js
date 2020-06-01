import React, {  } from 'react'
// import PropTypes from 'prop-types';

import {Header,scale,Platform,StatusBar,Left,Right,Body,Text, Colors, Fonts, TouchableWithoutFeedback} from '../common'
import HeaderStyle from './Styles/HeaderStyle'

const HeaderComponent = props => {


    return (
         <Header style={[HeaderStyle.headerBgColor,{paddingLeft:scale(15),paddingRight:scale(15)}]}>
          { Platform.OS == 'android'? <StatusBar translucent={true} backgroundColor={Colors.darkGray}  barStyle="dark-content" />:  <StatusBar backgroundColor={ Colors.darkGray} barStyle="dark-content"/>}  
            <Left style={{flex:1}}></Left>
            <Body style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={[{color:Colors.white,fontSize:Fonts.size.font20}]}>{props.title}</Text>
            </Body>
            <Right style={{flex:1}}>
                <TouchableWithoutFeedback onPress={()=> props.navigateTo('RegisterScreen')}>
                    <Text 
                    style={[{color:Colors.white,fontSize:Fonts.size.font14}]}>{props.navigateTitle}</Text>
                </TouchableWithoutFeedback>
            </Right>
           
        </Header>
    )
}

export default HeaderComponent;
