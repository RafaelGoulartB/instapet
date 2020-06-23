import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import RegisterPage from '../pages/auth/register';
import LoginPage from '../pages/auth/login';
import ResetPassword from '../pages/auth/resetPassword';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator initialRouteName="Register" headerMode="none">
      <AuthStack.Screen name="Register" component={RegisterPage} />
      <AuthStack.Screen name="Login" component={LoginPage} />
      <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
    </AuthStack.Navigator>
  );
}
