import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = () => {
  const nav = useNavigation()
  const isfocused = useIsFocused();
  const [data, setdata] = useState(null);

  useEffect(() => {
    getProfileDetails();
  }, [isfocused]);

  const getProfileDetails = async () => {
    const getdata = await AsyncStorage.getItem('USER');
    if (getdata !== null) {
      const parsedData = JSON.parse(getdata);
      setdata(parsedData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.profile}
          source={require('../../images/user-avatar.256x256.png')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>
        {data && data !== null ? data.email : 'Error Occured !'}
      </Text>

      {/* menu items screen */}
      <View style={{padding:20,marginTop:50,backgroundColor:"ghostwhite",borderRadius:20}}>
        {/* menu items */}
        {/* logout button */}
        <TouchableOpacity onPress={()=> nav.navigate("Products")}>
          <Text style={{fontSize:20,fontWeight:"600"}}>Products</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    marginTop: 13,
    textAlign: 'center',
    fontWeight: '600',
  },
});
