import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ARTICLE, FEED } from '../routes'
import { width,height } from '../Config/data/theme'

const ITEM_HEIGHT = height*0.18

const Menu = ({navigation}) => {

    const DATA = [
        {name:'Transition 1',backGround:"#9FD7F1",screen:FEED},
        {name:'Transition 2',backGround:"#f3b000",screen:ARTICLE},
        {name:'Transition 3',backGround:"#f2988f",screen:""}
    ]

  return (
<View style={{flex:1}}>

   <FlatList 
   data={DATA}
   keyExtractor={(item)=>`item.${item.name}.screen`}
   contentContainerStyle ={{padding:10}}
   renderItem={( {item} )=> {
    return <TouchableOpacity style={{marginBottom:10,height:ITEM_HEIGHT,justifyContent:'center',alignItems:'center'}}  onPress={()=>{navigation.navigate(item.screen,{item})}} >
        <View
        style={[StyleSheet.absoluteFillObject,{backgroundColor:item.backGround,borderRadius:20}]}
        />
<Text  style={styles.name}>
{item.name}
</Text>
        </TouchableOpacity>
   }}
   />
</View>
  )
}

const styles=StyleSheet.create({
name:{
    fontWeight:'800',
    fontSize:25
}
})

export default Menu