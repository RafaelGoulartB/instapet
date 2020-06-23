import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import Loading from '../pages/loading';

export default function Routes() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    });
  }, []);

  return (
    <>
      <NavigationContainer>
        {loading ? (
          <Loading />
        ) : isAuthenticated ? (
          <AppRoutes />
        ) : (
          <AuthRoutes />
        )}
      </NavigationContainer>
    </>
  );
}
