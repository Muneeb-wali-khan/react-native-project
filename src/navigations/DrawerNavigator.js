import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from '../screens/home/Main'
import CustomDrawer from '../components/CustomDrawer/CustomDrawer'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props)=> <CustomDrawer {...props}/>}>
        <Drawer.Screen options={{headerShown:false}} name="Main" component={Main} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator