import React, { useEffect } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { width,height } from '../Config/data/theme'
import Data from '../Config/data/Data'
import { Image } from 'react-native-animatable'
import { ARTICLE_DETAILS } from '../routes'
import Animated, { FadeInDown } from 'react-native-reanimated'



const TOP_HEADER_HEIGHT=height*0.12
const ITEM_HEIGHT= height * 0.18
const Article = ({navigation,route}) => {

    const {item}=route.params
const DATA=Data
   
  return (
<View style={{flex:1}}>

<View style={{alignItems:'center',justifyContent:'center',height:TOP_HEADER_HEIGHT}} >
<Text  style={styles.name}>{item.name}</Text>
</View>

<FlatList 

    data={DATA}
    keyExtractor={item => item.article_id}
    contentContainerStyle={{padding:15}}
    renderItem={({item,index})=>{
        return <Animated.View entering={FadeInDown.delay(200 * index)} >
        <Pressable  onPress={()=>{navigation.navigate(ARTICLE_DETAILS,{item})}}
          style={{    flexDirection: 'row',
          marginTop: 20,
          backgroundColor: 'white',
          padding: 10,
          marginHorizontal: 10,
          borderRadius: 20
        }}
        >

      



            <Animated.Image  sharedTransitionTag={`item.${item.article_id}.image`} source={{uri:item.image}} 
             style={styles.image} />

            <View style={{flex:1,justifyContent:'center',marginLeft:25}}>
            <Text style={styles.author} >{item.author}</Text>
            <Text  style={styles.category} >{item.category}</Text>
            <Text style={styles.publish_date} >{item.publish_date}</Text>

  
            </View>
          
      

        </Pressable>
        </Animated.View>
    }}
    />

<Animated.View 
sharedTransitionTag='article.bg'
style={styles.bg} />


  </View>
  )
}


const styles=StyleSheet.create({
    name:{
        fontWeight:'800',
        fontSize:25
    },
    image:{
        width: 140,
        height: 140,
        borderRadius: 10,
       
    },
    author:{
        fontSize:22,
        fontWeight:'700'
    },
    category:{
        fontSize:12,
        
    },
    publish_date:{
        fontSize:10,
        
    },
    bg:{
        position:'absolute',
        width,
        height,
        backgroundColor:'white',
        transform:[{translateY:height}],
        borderRadius:32
    }
    })


export default Article