import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ARTICLE, ARTICLE_DETAILS, FEED, FEED_DETAILS, MENU } from '../routes'
import Feed from '../Screens/Feed'
import FeedDetails from '../Screens/FeedDetails'
import Menu from '../Screens/Menu';
import Article from '../Screens/Article';
import ArticleDetails from '../Screens/ArticleDetails';
const HomeStack = () => {
const HomeRoute=createNativeStackNavigator();
  return (
  <HomeRoute.Navigator
  initialRouteName={MENU}
  screenOptions={{
    headerShown:false,

  }
  }
  >
    <HomeRoute.Screen name={MENU} component={Menu} />
    <HomeRoute.Screen name={FEED} component={Feed}  />
    <HomeRoute.Screen name={FEED_DETAILS} component={FeedDetails}  />
    <HomeRoute.Screen name={ARTICLE} component={Article} />
    <HomeRoute.Screen name={ARTICLE_DETAILS} component={ArticleDetails} />
  </HomeRoute.Navigator>
  )
}

export default HomeStack