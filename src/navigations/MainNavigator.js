import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/onBoarding/Splash';
import Login from '../screens/onBoarding/Login';
import Welcome from '../screens/onBoarding/Welcome';
import Products from '../screens/home/Products';
import Cart from '../screens/home/Cart';
const STACK = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <STACK.Navigator>
        <STACK.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="Products"
          component={Products}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="Cart"
          component={Cart}
          // options={{headerShown: false}}
        />
      </STACK.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
