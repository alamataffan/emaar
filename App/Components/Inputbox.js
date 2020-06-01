import React, {  } from 'react'

import { View ,TextInput,Fonts,Colors} from '../common'
import styles from './Styles/InputboxStyle'


 const Inputbox  = (props) =>  {
 
    return (
      <View >
       < TextInput 
        
        returnKeyType="search" returnKeyLabel={"search"} 
       editable={(props.editable == false) ? false :true}
       onChangeText={props.onChangeText}
       onBlur ={props.onBlur}
       error={props.error}
       value={props.value}
       secureTextEntry={props.secureTextEntry}
        placeholderTextColor={[{color:Colors.darkGray}]} 
        style={[Fonts.style.inputStyleForAuthForm,{fontSize:Fonts.size.font14,textAlign:"left"}]} 
        value={props.value} placeholder={props.placeholder}
        keyboardType={props.keyboardType 
        

      }
      />
      </View>
    )
  
}

export default Inputbox
