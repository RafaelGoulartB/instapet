import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FeedPage from '../pages/feed';
import SendPostPage from '../pages/sendPost';
import ProfilePage from '../pages/profile';

const Tab = createBottomTabNavigator();

const ProfileStack = createStackNavigator();
const SendPostStack = createStackNavigator();
const FeedStack = createStackNavigator();

const FeedStackScreen = () => (
  <FeedStack.Navigator>
    <FeedStack.Screen name="Feed" component={FeedPage} />
  </FeedStack.Navigator>
);

const SendPostStackScreen = () => (
  <SendPostStack.Navigator>
    <SendPostStack.Screen name="Send" component={SendPostPage} />
  </SendPostStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfilePage} />
  </ProfileStack.Navigator>
);

export default function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      showLabel={false}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={'#000'} size={20} />
          ),
        }}
      />
      <Tab.Screen name="Send" component={SendPostStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}
