import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeatherIcons from 'react-native-vector-icons/Feather';

import FeedPage from '../pages/feed';
import SendPostPage from '../pages/sendPost';
import ProfilePage from '../pages/profile';

const Tab = createBottomTabNavigator();

const ProfileStack = createStackNavigator();
const SendPostStack = createStackNavigator();
const FeedStack = createStackNavigator();

const headerStackStyle = {
  backgroundColor: '#B70B0B',
};

const FeedStackScreen = () => (
  <FeedStack.Navigator
    screenOptions={{headerTintColor: 'white', headerStyle: headerStackStyle}}>
    <FeedStack.Screen name="Feed" component={FeedPage} />
  </FeedStack.Navigator>
);

const SendPostStackScreen = () => (
  <SendPostStack.Navigator
    screenOptions={{headerTintColor: 'white', headerStyle: headerStackStyle}}>
    <SendPostStack.Screen name="Send" component={SendPostPage} />
  </SendPostStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{headerTintColor: 'white', headerStyle: headerStackStyle}}>
    <ProfileStack.Screen name="Profile" component={ProfilePage} />
  </ProfileStack.Navigator>
);

export default function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: '#B70B0B',
        inactiveBackgroundColor: '#B70B0B',
        activeTintColor: '#ffff',
        inactiveTintColor: '#B6B6B6',
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Send"
        component={SendPostStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcons name="plus-square" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcons name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
