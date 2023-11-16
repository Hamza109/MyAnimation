import React, { useEffect } from 'react'
import { StyleSheet, View,Text,Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ITEM_HEIGHT } from './Feed';
import { width,height } from '../Config/data/theme';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable'
import Animated, { FadeInUp,BounceIn } from 'react-native-reanimated';

const TOP_HEADER_HEIGHT=height*0.3
const FeedDetails = ({navigation,route}) => {
    const {item} =route.params

    const detailIcons=[
        {color:'#9FD7F1',icon:'hearto'},
        {color:'#f3b000',icon:'phone'},
        {color:'#f2988f',icon:'mail'},
    ]

  return (
<View style={{flex:1,backgroundColor:'#9966ff'}}>
   <AntDesign 
   name='arrowleft'
   size={28}
   style={{
    padding:12,
    position:'absolute',
    top:20,
    left:10,
    zIndex:2

   }}
   color={'#fff'}
   onPress={()=>{
    navigation.goBack()
   }}

   />



                <Animated.View 
                  sharedTransitionTag={`item.${item.key}.bg`}
                style={
                    [StyleSheet.absoluteFillObject,{backgroundColor:'#9966ff',borderRadius:0 ,height:TOP_HEADER_HEIGHT+32}]
                }
                />

    


<Animated.Text 
  sharedTransitionTag={`item.${item.key}.author`}
style={styles.author}>{item.author}</Animated.Text>


       
<View style={{width:width*0.6}}>

         <Animated.Text
           sharedTransitionTag={`item.${item.key}.title`}
          style={styles.title}>{item.title}</Animated.Text> 
         </View>

         <Animated.Text
           sharedTransitionTag={`item.${item.key}.category`}
         style={styles.category}>{item.category} ▪️ {item.publish_date}</Animated.Text>

            <Animated.Image
             sharedTransitionTag={`item.image`}
            source={{ uri: item.image }} style={styles.image} />





            <Animated.View 
              sharedTransitionTag={`general.bg`}
            style={styles.bg}>
       <ScrollView  style={{flex:1}}>
       <View 
       style={{flexDirection:'row',justifyContent:'space-evenly',marginVertical:10,marginBottom:22}}>
            {detailIcons.map((detail,index)=>{
                return (
                <Animated.View
               entering={BounceIn.delay(500+index*100)}

                key={`${detail.icon}-${index}`}
                style={{backgroundColor: detail.color, 
                    height:60, 
                    width:60,
                    borderRadius:32,
                    justifyContent:'center',
                    alignItems:'center'}}
                >
                    <AntDesign name={detail.icon} size={25} color={'white'} />
                </Animated.View>
                )
            })
            }
         </View>

<Animated.View 
entering={FadeInUp.delay(600)}


style={{padding:10}}>
<Text style={styles.content}>{item.paragraph}</Text>
</Animated.View>

       </ScrollView>
                </Animated.View>
    
    
   


</View>
  )
}

const styles = StyleSheet.create({
 author:{
        fontWeight:'500',
       color:'lightgray',
       fontSize:12,
       color:'lightgrey',
       fontSize:15,
       position:'absolute',
       top:TOP_HEADER_HEIGHT*0.35,
       left:10
    },
    title:{
        fontWeight:'700',
    color:'lightgrey',
    fontSize:15,
    position:'absolute',
    top:TOP_HEADER_HEIGHT*0.45,
    left:10

},
    category:{
        fontWeight:'500',
    color:'lightgray',
    fontSize:10,
    position:'absolute',
    top:TOP_HEADER_HEIGHT*0.8,
    left:10
},


    image:{
       width:ITEM_HEIGHT*0.9,
       height:ITEM_HEIGHT*0.9,
       position:'absolute',
       top:TOP_HEADER_HEIGHT-ITEM_HEIGHT ,
       right:20,
  
  
       zIndex:3
 
    },

    bg:{
        position:'absolute',
        width,
        height,
        backgroundColor:'white',
        transform:[{translateY:TOP_HEADER_HEIGHT}],
        borderRadius:32,
        padding:10,
        paddingTop:22
    }
,
  content:{
   fontWeight:'500',
   color:'#333',
   fontSize:20
  }

})


export default FeedDetails