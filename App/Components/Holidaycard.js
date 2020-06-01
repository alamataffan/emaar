import React, {} from 'react'
import { View,Text,FlatList,Card, scale,Fonts,moment, Colors} from '../common'
import styles from './Styles/HolidaycardStyle'
import Emptylisting from '../Components/Emptylisting';
const Holidaycard = (props) => {

  const renderItem = ({ item }) => {
     return (
         <Card style={{padding:scale(10)}}>
           <View style={[Fonts.style.justifyAlignCenter,{}]}>
              <Text style={{color:Colors.darkGray,fontSize:Fonts.size.font22}}>{item.summary}</Text>
           </View>
           <View style={[Fonts.style.justifyAlignCenter,{marginVertical:scale(10)}]}>
              <Text style={[{fontSize:Fonts.size.font18,paddingBottom:scale(5)}]}>{`Start : ${moment(item.start.date).format('MMMM Do YYYY')}`}</Text>
              <Text style={[{fontSize:Fonts.size.font18}]}>{`End : ${moment(item.end.date).format('MMMM Do YYYY')}`}</Text>
           </View>
         </Card>
     );
   }


    return (
      <View style={{}}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={props.data.items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={{padding:scale(10)}}
            ListEmptyComponent={()=>{return <Emptylisting emptyText ={"No Holidays Listing"}/>}} 
          />
      </View>
    )

}

export default Holidaycard
