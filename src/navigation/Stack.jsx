import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Inicio } from "../page/Inicio";
import { Login } from "../page/Login";
import { AuthContext } from "../context/auth/AuthContext";

const Stack = createStackNavigator();

export const StackNavigation = () => {
  const { status } = useContext(AuthContext);

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      {status !== "authenticated" ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <Stack.Screen name="Inicio" component={Inicio} />
      )}
    </Stack.Navigator>
  );
};
