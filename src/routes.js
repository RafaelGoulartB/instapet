import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";

import RegisterPage from "./pages/auth/register";
import LoginPage from "./pages/auth/login";
import FeedPage from "./pages/feed";
import ProfilePage from "./pages/profile";

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
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

export default function Routes() {
  const user = useSelector(state => state.user);

  return (
    <>
      <NavigationContainer>
        {user.token ? (
          <Tab.Navigator initialRouteName="Feed">
            <Tab.Screen name="Feed" component={FeedStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
          </Tab.Navigator>
        ) : (
          <AuthStack.Navigator initialRouteName="Register">
            <AuthStack.Screen name="Register" component={RegisterPage} />
            <AuthStack.Screen name="Login" component={LoginPage} />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
}
