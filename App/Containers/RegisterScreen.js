import React, {useState } from 'react'
import { TouchableWithoutFeedback,Container,Content,Root,Colors,scale,Fonts,StatusBar,View,KeyboardAvoidingView,Platform,Text,validate} from '../common'
// Styles
import styles from './Styles/LoginScreenStyle'
import Imagecard from '../Components/Imagecard'
import Inputbox from '../Components/Inputbox'
import Authbutton from '../Components/Authbutton'
import Successmodal from '../Components/Successmodal'
import HocScreen from './HocScreen'



const RegisterScreen = (props) => {
  
const [name,setName] = useState(false)
const [nameError,setNameError] = useState(false)
const [showToast,setshowToast] = useState(false)
const [email,setEmail] = useState(false)
const [emailError,setEmailError] = useState(false)
const [password,setPassword] = useState(false)
const [passwordError,setPasswordError] = useState(false)
const [Cpassword,setCPassword] = useState(false)
const [CpasswordError,setCpasswordError] = useState(false)
const [secureTextEntry,setSecureTextEntry] = useState(true)
const [modalVisible,setmodalVisible] = useState(false)




  
  onRegister = ()=>{
    const nameError = validate('name', name);  
    const emailError = validate('email', email);
    const passwordError = validate('password',password);
    const CpasswordError = validate('Cpassword', Cpassword);


    setNameError(nameError) 
    setEmailError(emailError);
    setPasswordError(passwordError)
    setCpasswordError(CpasswordError)



    if(nameError != null){
      props.showToastMethod(nameError,"danger")
    }
  else if( emailError != null){
    props.showToastMethod(emailError,"danger")
    }else if(passwordError != null){
      props.showToastMethod(passwordError,"danger")
    }else if(CpasswordError != null){
      props.showToastMethod(CpasswordError,"danger")
    }
    else if(password != Cpassword){
      props.showToastMethod('Password and Confirm Password Not Match',"danger")
    }else{
      toggleModal()
    }
  }

    toggleModal = () =>{
      setmodalVisible(!modalVisible)
    }





    const {navigation} = props;
    return (
      <Root >
       
      <Container  style={{marginTop: StatusBar.currentHeight}}>
     
        <Content 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={[Fonts.style.justifyAlignCenter,{height:"95%",justifyContent:"flex-end",}]} >

         <KeyboardAvoidingView
            keyboardVerticalOffset={scale(50)}
            behavior={Platform.Os == "ios" ? "padding" : "height"}
            style={{flex:1,justifyContent:"center",alignItems:"center",width:"100%"}}
          >

          <View style={[,{width:"90%"}]}>
              <View style={[Fonts.style.justifyAlignCenter,{marginVertical:scale(10)}]}>
                      <Imagecard
                      resizeMode={'contain'}
                      inApp = {true}
                      img ={require(`../Images/emaar-logo.jpg`)}
                      imageStyle={{width:scale(182),height:scale(55) }}
                    />
                </View>
            <View>

            <Inputbox 
               error={nameError}
               onChangeText={(value)=>setName(value.trim()) } 
               onBlur = {()=>{  
                setNameError(validate('name', name)
               )}}
              secure={false} placeholderTextColor={ Colors.darkGray} placeholderStyle={[{}]} placeholder={'Name'}
              inputStyle={[Fonts.style.inputStyleForAuthForm]}/>

              <Inputbox 
               error={emailError}
               onChangeText={(value)=>setEmail( value.trim()) } 
               onBlur = {()=>{  
                setEmailError(validate('email', email)
               )}}
              secure={false} placeholderTextColor={ Colors.darkGray} placeholderStyle={[{}]} placeholder={'Email'}
              inputStyle={[Fonts.style.inputStyleForAuthForm]}/>

              <Inputbox  placeholderTextColor={ Colors.darkGray} placeholderStyle={[{}]} placeholder={'Password'} 
               eyeToggle = {()=>{setSecureTextEntry(!secureTextEntry)}}
               secureTextEntry={secureTextEntry}
               passwordField = {true}
                error={passwordError}
                onChangeText={(value)=>setPassword(value.trim()) } 
                onBlur = {()=>{  
                 setPasswordError(validate('password', password)
                )}}
                inputStyle={[Fonts.style.inputStyleForAuthForm]}/>

                <Inputbox  placeholderTextColor={ Colors.darkGray} placeholderStyle={[{}]} placeholder={'Confirm Password'} 
                eyeToggle = {()=>{setSecureTextEntry(!secureTextEntry)}}
                secureTextEntry={secureTextEntry}
                passwordField = {true}
                error={passwordError}
                onChangeText={(value)=>setCPassword(value.trim()) } 
                onBlur = {()=>{  
                 setCpasswordError( Cpassword
                )}}
                inputStyle={[Fonts.style.inputStyleForAuthForm]}/>

           
                <Authbutton onPressAuth={()=>{onRegister()}}
                  buttonText={'Register'} 
                  buttonTextStyle={{padding:scale(0),color:Colors.white,fontSize:Fonts.size.font14,}}
                  buttonStyle={{justifyContent: 'center',backgroundColor:Colors.darkGray,borderRadius:scale(8),
                  alignItems: 'center',marginVertical:scale(0),justifyContent:"center",padding:scale(10)}}
                  />

                <TouchableWithoutFeedback onPress={()=>{props.navigateTo('HomeScreen')}}>
                    <View style={[{marginVertical:scale(20),flexDirection:"row",justifyContent:"center"}]}>
                      <View style={{}}>
                        <Text style={[{color:Colors.darColor,fontSize:Fonts.size.font12,}]}>Countinue To Calender</Text>
                      </View>
                    </View>
              </TouchableWithoutFeedback>
            </View>
          </View>     
          </KeyboardAvoidingView>
        
        </Content>
        <Successmodal 
          isModalVisible ={modalVisible}
          toggleModal={toggleModal}
          />
      </Container>
   </Root> 
    )
 
}



export default HocScreen (RegisterScreen);
