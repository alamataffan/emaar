import React, { useState,useEffect } from 'react'

import { View,Container,Content,Root,StatusBar,SplashScreen} from '../common'
import {useDispatch, useSelector} from 'react-redux'
import HeaderComponent from '../Components/Header'
import HomeAction from '../Redux/HomeRedux'
import Holidaycard from '../Components/Holidaycard'
import Placeholder from '../Components/Placeholder'
import HocScreen from './HocScreen'

// we are using Hooks,and Redux Hooks, so we dont require Connect HOC Method Now, we need that when dont use react hooks
// This has make things Easy, and cleaner 
// I have Used PlaceHolder Card, I can just pass the props and change the data, change from horizontal to vertical
// (placeholder will be in  used till we get API response)
// I have used Higher Order Component for sharing same functionality like navigation

const HomeScreen = props =>{
  const [placeHolder,setIplaceHolder] = useState([...new Array(6).fill({})])
  const [fetching,setFetching] = useState(true)
  const [error,setError] = useState(false)

 
  const dispatch = useDispatch();

  // This is selector Act as a mapStateToProps
  const {calender,all} = useSelector(state =>({
    calender :state.homeData.payload,
    all:state.homeData
  }));
  
  


  // This call API - This Act as a Component Did Mount.
  useEffect(() => {
    SplashScreen.hide() // i can hide splas screen after we get API response(but want to show the placeholder)
    setFetching(true);
    dispatch(HomeAction.homeRequest())
  },[]);

  // After Receaving Response We can call any other function/show message, etc
  useEffect(() => {
    
    if(calender != null){
     setFetching(false);
    }
    if(all.error ==true ){
      setFetching(false);
      setError(true)
     }
  
  },[calender,all]);


  
  

  return(
    <Root>
      <Container style={{marginTop: StatusBar.currentHeight}}>
        <HeaderComponent 
        navigateTitle ={'Register'}
        navigateTo={props.navigateTo}
        title={'Holidays'}/>
        <Content 
        showsVerticalScrollIndicator={false}
        style={{flex:1}}
        >
           {
            (fetching) ?
            <Placeholder
              horizontal={false}
              categoryData={placeHolder}
              showPlaceHolderMedia={false}
              showTitle ={false}
            />
            :
            <Holidaycard 
            data={calender != null ? calender :[]}
            error={error}
            />
          }
        </Content>
         
      </Container>
    </Root>
  )
}

export default HocScreen(HomeScreen)

