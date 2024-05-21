import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { THEME_COLOR } from '../../utils/Colors'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = () => {
  const navigate = useNavigation()
  // now we want to go to login screeen after splash screen shows
  useEffect(()=>{
    setTimeout(() => {
     check_User_LogedIn()
    }, 3000);
  },[])

  // if user is loged in then navigate to login screen else navigate to welcome screen
  const check_User_LogedIn = async()=>{
    const getUser = await AsyncStorage.getItem("USER")
    if(getUser != null){
      navigate.navigate('Login')
    }else{
      navigate.navigate('Welcome')
    }
  }

  return (
    <View style={styles.container}>
      {/* status bar is top layer where time,network,battery shows */}
      <StatusBar barStyle={'light-content'} backgroundColor={THEME_COLOR}/>
      <Image 
        source={require("../../images/linkdin-logo.png")}
        style={styles.logo}
      />
    </View>
  )
}

export default Splash


const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:THEME_COLOR
  },
  logo:{
    width:"30%",
    height:"20%"
  }
})