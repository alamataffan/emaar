import React, {  } from 'react'
// import PropTypes from 'prop-types';
import { Modal,View,Text,Button,Colors, scale, Fonts} from '../common'
import styles from './Styles/SuccessmodalStyle'

 const  Successmodal = (props) =>  {


    return (
      <View style={{}}>
      <Modal isVisible={props.isModalVisible}
      style={{backgroundColor:"#fff",minHeight:scale(200)}}
      >
        <View style={[Fonts.style.justifyAlignCenter,{}]}>
          <Text style={{color:Colors.darkGray}}> Success Fully Register</Text>
          <Button onPress={()=>props.toggleModal()} style={[Fonts.style.justifyAlignCenter,{marginTop:scale(25),width:'90%',backgroundColor:Colors.darkGray}]}>
            <Text style={{color:Colors.white,fontSize:Fonts.size.font16}}>Close</Text></Button>
        </View>

      </Modal>
    </View>
    )
  
}

export default Successmodal
