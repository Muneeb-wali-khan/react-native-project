import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from '../screens/home/Main'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen options={{headerShown:false}} name="Main" component={Main} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator