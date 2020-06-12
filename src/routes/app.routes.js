import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedPage from "../pages/feed";
import ProfilePage from "../pages/profile";

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
const FeedStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfilePage} />
  </ProfileStack.Navigator>
);
const FeedStackScreen = () => (
  <FeedStack.Navigator>
    <FeedStack.Screen name="Feed" component={FeedPage} />
  </FeedStack.Navigator>
);

export default function AppRoutes() {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen name="Feed" component={FeedStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}
