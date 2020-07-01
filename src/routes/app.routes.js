import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeatherIcons from 'react-native-vector-icons/Feather';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import FeedPage from '../pages/feed';
import SendPostPage from '../pages/sendPost';
import ProfilePage from '../pages/profile';
import ChatsPage from '../pages/chats';

const Tab = createBottomTabNavigator();

const ProfileStack = createStackNavigator();
const SendPostStack = createStackNavigator();
const FeedStack = createStackNavigator();

const headerStackStyle = {
  backgroundColor: '#B70B0B',
};
function chatRightButton(navigation) {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('Feed', {screen: 'Chats'})}>
          <FontAwesomeIcons name="send" color="#ffff" size={20} />
        </TouchableOpacity>
      );
    },
    headerRightContainerStyle: {paddingRight: 22},
  };
}

const FeedStackScreen = ({navigation}) => (
  <FeedStack.Navigator
    screenOptions={{headerTintColor: 'white', headerStyle: headerStackStyle}}>
    <FeedStack.Screen
      name="Feed"
      component={FeedPage}
      options={chatRightButton(navigation)}
    />
    <FeedStack.Screen name="Chats" component={ChatsPage} />
  </FeedStack.Navigator>
);

const SendPostStackScreen = ({navigation}) => (
  <SendPostStack.Navigator
    screenOptions={{headerTintColor: 'white', headerStyle: headerStackStyle}}>
    <SendPostStack.Screen
      name="Send"
      component={SendPostPage}
      options={chatRightButton(navigation)}
    />
  </SendPostStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{headerTintColor: 'white', headerStyle: headerStackStyle}}>
    <ProfileStack.Screen
      name="Profile"
      component={ProfilePage}
      options={chatRightButton(navigation)}
    />
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
