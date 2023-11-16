
import React, { useEffect } from 'react'
import { StyleSheet, View,Text,Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ITEM_HEIGHT } from './Feed';
import { width,height } from '../Config/data/theme';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable'
import Animated, { FadeInUp,BounceIn, FadeIn } from 'react-native-reanimated';
const TOP_HEADER_HEIGHT=height*0.3
const ArticleDetails = ({navigation,route}) => {
    const {item} = route.params
    const detailIcons=[
        {color:'#9FD7F1',icon:'hearto'},
        {color:'#f3b000',icon:'phone'},
        {color:'#f2988f',icon:'mail'},
    ]

   
  return (
   <View style={styles.container}>
    <Animated.View entering={FadeIn.delay(600)}  style={{flexDirection:'row',
      padding:12,
    position:'absolute',
    top:20,
    left:10,
    zIndex:2,
    justifyContent:'space-between',
    width:width*0.95
    
    }}>
    <AntDesign 
   name='arrowleft'
   size={28}
  
   color={'#fff'}
   onPress={()=>{
    navigation.goBack()
   }}

   />
     <AntDesign 
   name='heart'
   size={28}
  
   color={'#fff'}


   />
   
   </Animated.View>


<View>
<Animated.Image 
sharedTransitionTag={`item.${item.article_id}.image`}
source={{uri:item.image}} style={styles.image} />
<Animated.View
entering={FadeInUp.delay(800)}
style={styles.textContainer}>
    <Text style={styles.author} >{item.author}</Text>
    <Text style={styles.category} >{item.category}</Text>

</Animated.View>
</View>


<Animated.View 
              sharedTransitionTag={`article.bg`}
            style={styles.bg}>
       <ScrollView  style={{flex:1}}>
       <View 
       style={{flexDirection:'row',justifyContent:'space-evenly',marginVertical:10,marginBottom:22}}>
            {detailIcons.map((detail,index)=>{
                return (
                <Animated.View
               entering={BounceIn.delay(1000+index*100)}

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
entering={FadeInUp.delay(1400)}


style={{padding:10}}>
<Text style={styles.content}>{item.paragraph}</Text>
</Animated.View>

       </ScrollView>
                </Animated.View>
    

   </View>
  )
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white'
 
    },
    image:{
        width:width,
        height:TOP_HEADER_HEIGHT+32
    },
    bg:{
        position:'absolute',
        width,
        height,
        backgroundColor:'white',
        transform:[{translateY:TOP_HEADER_HEIGHT}],
        borderRadius:32,
        padding:10,
        paddingTop:22,
         

    },
    textContainer:{
     
        position:'absolute',
        bottom:TOP_HEADER_HEIGHT*0.18,
        padding:16,
        left:10,
        right:10,
        borderRadius:20,
        backgroundColor:'rgba(0,0,0,0.6)'
    },
    author:{
        fontWeight:'700',
        fontSize:22,
        color:'#fff'
    },
    category:{
        fontWeight:'300',
        fontSize:14,
        color:'#fff'
    }

})

export default ArticleDetails

