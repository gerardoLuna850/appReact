import React, { Component } from "react";
import Login from './screen/Login.js';
import Registro from './screen/Registro.js';
import { View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import detalles from './screen/detalles.js';
import Principal from './screen/Principal.js';
import Apipoke from './screen/Apipoke'


const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="detalles" component={detalles} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Apipoke" component={Apipoke} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;