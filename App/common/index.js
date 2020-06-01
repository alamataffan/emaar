import { PermissionsAndroid, Platform,ImageBackground,SafeAreaView, Linking,Text,View, KeyboardAvoidingView,ScrollView,BackHandler,Alert,StatusBar ,ActivityIndicator,Dimensions ,FlatList,Image,TextInput,TouchableWithoutFeedback} from 'react-native'
import { scale } from "react-native-size-matters";
import moment from "moment";
import validate from '../Lib/validator'
import Config from '../Config/index';
import Modal from 'react-native-modal';
import SplashScreen from 'react-native-splash-screen'
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    ShineOverlay,
  } from 'rn-placeholder';
const { width, height } = Dimensions.get('window');
import FastImage from 'react-native-fast-image'
import { ApplicationStyles,Colors, Fonts } from '../Themes';
import {
  Container,
  Content,
  Toast, 
  Root,Card,Switch,
  Header,Left,Right,Title,Body,Button,Icon
} 
from "native-base";
export {
    Config,validate,Switch,Button,Icon,
    Linking,Text,View, KeyboardAvoidingView,ScrollView,BackHandler,Alert,StatusBar ,ActivityIndicator,Platform,TouchableWithoutFeedback,ImageBackground,
    scale,SafeAreaView,
    SplashScreen,
    ApplicationStyles,Colors, Fonts,
    Container,
    Content,
    Toast,Card,
    Root,
    Header,
    width, height,FlatList,FastImage,Image,
    Placeholder,PlaceholderMedia,PlaceholderLine,ShineOverlay,
    TextInput,PermissionsAndroid,
    Left,Right,Title,Body,Modal,moment

}