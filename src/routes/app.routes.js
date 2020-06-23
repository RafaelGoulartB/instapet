import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from '../pages/home';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Home" component={HomePage} />
  </ProfileStack.Navigator>
);

export default function AppRoutes() {
  return <ProfileStackScreen />;
}
