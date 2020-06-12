import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <NavigationContainer>
        {user.token ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </>
  );
}
