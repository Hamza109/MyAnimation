import React, { useEffect } from 'react'
import { FlatList,View,Text, StyleSheet ,TouchableOpacity,SafeAreaView,Image} from 'react-native'
import DATA from '../Config/data/Data'
import { height ,width} from '../Config/data/theme'
import { FEED, FEED_DETAILS } from '../routes'
import Animated, { FadeInDown } from 'react-native-reanimated';
import { FadeInUp } from 'react-native-reanimated'

export const ITEM_HEIGHT=height * 0.18
export default  function Feed({navigation}) {


  return (
<SafeAreaView style={{flex:1}}>
    <Animated.FlatList 
    entering={FadeInDown.delay(1000)}
    exiting={FadeInUp}
    data={DATA}
    keyExtractor={item => item.article_id}
    contentContainerStyle={{padding:10}}
    renderItem={({item})=>{
        return <TouchableOpacity  onPress={()=>{navigation.navigate(FEED_DETAILS,{item})}}
          style={{marginBottom:10,height:ITEM_HEIGHT}}
        >
            <View style={{flex:1,padding:10,flexDirection:'row'}}>
                <Animated.View 
                sharedTransitionTag={`item.${item.key}.bg`}
                style={
                    [StyleSheet.absoluteFillObject,{backgroundColor:'#9966ff',borderRadius:0}]
                }
                />

                <View style={{flex:1,justifyContent:'space-evenly'}}>
              
                <Animated.Text 
                
                  sharedTransitionTag={`item.${item.key}.author`}
                style={styles.author}>{item.author}</Animated.Text>
         <Animated.Text
           sharedTransitionTag={`item.${item.key}.title`}
         style={styles.title}>{item.title}</Animated.Text> 
         <Animated.Text 
           sharedTransitionTag={`item.${item.key}.category`}
         style={styles.category}>{item.category} ▪️ {item.publish_date}</Animated.Text>
         </View>

          <View style={{justifyContent:'center'}}>
            <Animated.Image 
        
               sharedTransitionTag={`item.image`}
            source={{uri: item.image}} style={styles.image} />
          </View>
    
            </View>

        </TouchableOpacity>
    }}
    />

<Animated.View  
  sharedTransitionTag={`general.bg`}
style={styles.bg}/>

</SafeAreaView>
  )
}

const styles=StyleSheet.create({
    author:{
        fontWeight:'500',
       color:'lightgray',
       fontSize:12
    },
    title:{
        fontWeight:'700',
    color:'#000',
    fontSize:15
},
    category:{
        fontWeight:'500',
    color:'lightgray',
    fontSize:10
},


    image:{
       width:ITEM_HEIGHT*0.7,
       height:ITEM_HEIGHT*0.7,
 
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






