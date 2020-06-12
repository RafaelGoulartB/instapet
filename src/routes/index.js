import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { AsyncStorage } from 'react-native';

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import Loading from "../pages/loading";

export default function Routes() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const StorageUser = await AsyncStorage.getItem('@insta:user');
      const StorageToken = await AsyncStorage.getItem('@insta:token');

      if(StorageToken && StorageUser) {
        dispatch({
          type: 'LOG_IN',
          token: StorageToken,
          user: JSON.parse(StorageUser)
        });
      };
      setLoading(false);
    };

    loadStorageData();
  }, [])


  return (
    <>
      <NavigationContainer>
        { loading ? <Loading /> :
          user.token ? <AppRoutes /> : <AuthRoutes />
        }
      </NavigationContainer>
    </>
  );
}
