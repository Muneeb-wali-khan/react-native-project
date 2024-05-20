import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { THEME_COLOR } from '../../utils/Colors'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const navigate = useNavigation()
  // now we want to go to login screeen after splash screen shows
  useEffect(()=>{
    setTimeout(() => {
      navigate.navigate('Welcome')
    }, 3000);
  },[])

  return (
    <View style={styles.container}>
      {/* status bar is top layer where time,network,battery shows */}
      <StatusBar barStyle={'light-content'} backgroundColor={THEME_COLOR}/>
      <Image 
        source={require("../../images/logo.png")}
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